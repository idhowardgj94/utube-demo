// @flow
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import AdBox from '../components/AdBox';
import ReactHlsPlayer from 'react-hls-player';
import '../sass/Player.scss';
export function Player(): React.Node {
  const videoEl = useRef(null);

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
        <div className="topic">
          【閒君】我覺得很值得一看｜短評《塗鴉王國和四位勇士》
        </div>
      </section>
    </div>
  );
}

export default Player;
