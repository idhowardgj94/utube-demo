// @flow
import * as React from 'react';
import img from '../assets/sample.jpg';
import '../sass/VideoBox.scss';

export function VideoBox(): React.Node {
  return (
    <section className="box">
      <img src={img} alt="video img" />
      <div className="description">
        <section>
          <div className="topic">
            【閒君】我覺得很值得一看｜短評《塗鴉王國和四位勇士》
          </div>
        </section>
        <section>
          <div>description</div>
          <div>觀看次數： xxxx 次</div>
          <div>2 個月前</div>
        </section>
      </div>
    </section>
  );
}

export default VideoBox;
