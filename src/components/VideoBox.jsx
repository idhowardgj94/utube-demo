// @flow
import * as React from 'react';
import { useState } from 'react';
import img from '../assets/sample.jpg';
import '../sass/VideoBox.scss';
import type { Thumbnail } from '../services/youtubeApiService';
import { getDuration } from '../utils';
import { Link } from 'react-router-dom';
import LikeService from '../services/likeApiService';
interface Props {
  thumbnail: Thumbnail;
  title: string;
  id: string;
  description: string;
  duration: string;
}

export function VideoBox(props: Props): React$Node {
  const [islike, refresh] = useState(LikeService.isLike(props.id));

  const clickhandler = () => {
    if (islike) {
      LikeService.removeLike(props.id);
    } else {
      LikeService.addLike(props.id);
    }
    refresh(!islike);
  };
  return (
    <section className="box">
      <Link to={`/player/${props.id}`}>
        <img src={props.thumbnail.url} alt="video img" />
      </Link>

      <div className="description">
        <section>
          <Link to={`/player/${props.id}`}>
            <div className="topic">{props.title}</div>
          </Link>
        </section>
        <section>
          <div className="pl8">
            影片長度: {getDuration(props.duration)} {` `}
            {islike ? (
              <button onClick={clickhandler}>移除收藏</button>
            ) : (
              <button onClick={clickhandler}>加入收藏</button>
            )}
          </div>
          <article className="pl8 text_overflow_ellipsis">
            影片描述：
            {props.description}
          </article>
        </section>
      </div>
    </section>
  );
}

export default VideoBox;
