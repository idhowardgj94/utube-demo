// @flow
import YoutubeApiService from './youtubeApiService';
import type { Items } from './youtubeApiService';
import { Observable, BehaviorSubject } from 'rxjs';
class LikeApiService {
  _storageKey: string = 'like-cache';
  _likeList: string[] = [];
  _likeSubject$: BehaviorSubject<Items[]>;
  constructor() {
    this._likeSubject$ = new BehaviorSubject([]);
    const i = localStorage.getItem(this._storageKey);
    if (i !== undefined && i !== null) {
      this._likeList = JSON.parse(i);
    }
    this._sync();
  }

  get data$(): Observable<Items[]> {
    return this._likeSubject$.asObservable();
  }

  getLikes(): Items[] {
    let ret = [];
    ret = this._likeList
      .map((l) => {
        const r = YoutubeApiService.get(l);
        return r ? [r] : [];
      })
      .flatMap((it) => it);
    return ret;
  }

  addLike(id: string) {
    !this._likeList.find((d) => d === id) && this._likeList.push(id);
    this._sync();
  }

  removeLike(id: string) {
    this._likeList = this._likeList.filter((it) => it !== id);
    this._sync();
  }

  isLike(id: string): boolean {
    return this._likeList.find((it) => it === id) !== undefined;
  }

  _sync() {
    localStorage.setItem(this._storageKey, JSON.stringify(this._likeList));
    this._likeSubject$.next(this.getLikes());
  }
}

const singleton: LikeApiService = new LikeApiService();
export default singleton;
