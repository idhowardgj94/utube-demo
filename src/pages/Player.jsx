// @flow
import * as React from 'react';
import { useRef, useState } from 'react';
import { useParams } from 'react-router';
import AdBox from '../components/AdBox';
import ReactHlsPlayer from 'react-hls-player';
import '../sass/Player.scss';
import ApiService from '../services/youtubeApiService';
import type { Items } from '../services/youtubeApiService';
export function Player(): React.Node {
  const videoEl = useRef(null);
  let { id } = useParams();
  const [s] = useState<Items>(ApiService.get(id));

  return (
    <div className="container">
      <section className="video_container">
        <ReactHlsPlayer
          url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
          autoplay={false}
          controls={true}
          width="100%"
          height="auto"
          playerRef={videoEl}
          className="video"
        />
        <AdBox videoEl={videoEl} />
      </section>
      <section>
        <h1 className="topic">{s.snippet.title}</h1>
        {s.snippet.description.split('\n').map((t, i) => (
          <p key={i}>{t}</p>
        ))}

        {/* <p dangerouslySetInnerHTML={{ __html: s.snippet.description }} /> */}
      </section>
    </div>
  );
}

export default Player;
