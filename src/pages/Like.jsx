// @flow
import * as React from 'react';
import { useState, useEffect } from 'react';
import VideoBox from '../components/VideoBox';
import '../sass/Home.scss';
import ApiService from '../services/youtubeApiService';
import LikeService from '../services/likeApiService';
import type { Items } from '../services/youtubeApiService';

export function Like(): React.Node {
  const [data, setData] = useState<Items[]>([]);

  useEffect(() => {
    LikeService._sync();
    const description = LikeService.data$.subscribe(setData);
    return () => {
      description.unsubscribe();
    };
  }, []);

  return (
    <div className="container">
      <section className="wrapper">
        {data.map((d, idx) => (
          <VideoBox
            key={d.id}
            id={d.id}
            thumbnail={d.snippet.thumbnails.default}
            title={d.snippet.title}
            description={d.snippet.description}
            duration={d.contentDetails.duration}
          />
        ))}
        {data.length === 0 && <h2>您還沒有任何最愛影片</h2>}
      </section>
    </div>
  );
}

export default Like;
