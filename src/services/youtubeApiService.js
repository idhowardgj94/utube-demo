// @flow
import { BehaviorSubject, from } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

export type Thumbnail = {
  url: string,
  width: Number,
  height: Number,
};

export type Items = {
  kind: string,
  etag: string,
  id: string,
  snippet: {
    publishedAt: Date,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: Thumbnail,
      medium: Thumbnail,
      high: Thumbnail,
      standard: Thumbnail,
      maxres: Thumbnail,
    },
  },
  channelTitle: string,
  categoryId: string,
  liveBroadcastContent: string,
  contentDetails: {
    duration: string,
  },
};

export type YoutubeRepository = {
  kind: string,
  etag: string,
  items: Items[],
  nextPageToken: string,
};

class YoutubeApiService {
  _event$: BehaviorSubject<'ready' | 'init'>;
  _repo$: BehaviorSubject<YoutubeRepository | null>;
  _numPerPg: number;
  constructor() {
    this._event$ = new BehaviorSubject('init');
    this._repo$ = new BehaviorSubject(null);
    this.init();
    this._numPerPg = 12;
  }

  get event(): 'ready' | 'init' {
    return this._event$.value;
  }

  init() {
    from(
      fetch(
        'https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&maxResults=50&key=AIzaSyCrwZT5eJWe9ue4IDvvmrvXftdyVDIkQa8'
      ).then((r) => r.json())
    )
      .pipe(
        tap((d) => this._repo$.next(d)),
        tap(console.log),
        switchMap((data) =>
          from(
            fetch(`
        https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&maxResults=50&pageToken=${data.nextPageToken}&key=AIzaSyCrwZT5eJWe9ue4IDvvmrvXftdyVDIkQa8
        `).then((r) => r.json())
          )
        )
      )
      .subscribe((data: YoutubeRepository) => {
        const nextItems = data.items;
        const r = this._repo$.value;
        if (r !== null) {
          r.items = r.items.concat(nextItems);
        }

        this._repo$.next(r);
        this._event$.next('ready');
      });
  }

  getPage(page: number): Items[] {
    const offset = page * this._numPerPg;
    const repo = this._repo$.value;
    console.log('inside getPage', repo);
    return repo !== null
      ? repo.items.slice(offset, offset + this._numPerPg)
      : [];
  }

  get(id: number): ?Items {
    return this._repo$.value
      ? this._repo$.value.items.find((d) => d.id === id)
      : null;
  }
}

const singleton: YoutubeApiService = new YoutubeApiService();
export default singleton;
