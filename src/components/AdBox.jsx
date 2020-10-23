// @flow
import * as React from 'react';
import { useState, useEffect } from 'react';
import { fromEvent, merge } from 'rxjs';
import { tap } from 'rxjs/operators';

import '../sass/VideoBox.scss';

interface PropType {
  videoEl: React.ElementRef<any>;
}

export function AdBox(props: PropType): React.Node {
  const [adshow, setAdshow] = useState(true);

  useEffect(() => {
    const { videoEl } = props;
    const playEvent = fromEvent(videoEl.current, 'play');
    const pauseEvent = fromEvent(videoEl.current, 'pause');

    const sub = merge(playEvent, pauseEvent)
      .pipe(tap(() => setAdshow((s) => !s)))
      .subscribe();

    return () => {
      sub.unsubscribe();
    };
  }, [props]);
  return (
    <div className={`ad ${adshow ? '' : 'hide'}`}>
      <h1 className="pd20">
        demo designed by Howard Chang. <br />
        I'm looking for a frontend engineer job.....QQ
      </h1>
    </div>
  );
}

export default AdBox;
