// @flow
import * as React from 'react';
import styled from 'styled-components';
import img from '../assets/sample.jpg';

const Box = styled.div`
  margin: 5px;
  grid-column: span 1;
  background-color: green;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  max-height: 118px;
  width: 100%;
  flex: 1;
`;

const Description = styled.div`
  flex: 2;
`;

const Topic = styled.div`
  font-size: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 10px;
`;

export function VideoBox(): React.Node {
  return (
    <Box>
      <Img src={img} alt="Forest"></Img>
      <Description>
        <section>
          <Topic>【閒君】我覺得很值得一看｜短評《塗鴉王國和四位勇士》</Topic>
        </section>
        <section>
          <div>description</div>
          <div>觀看次數： xxxx 次</div>
          <div>2 個月前</div>
        </section>
      </Description>
    </Box>
  );
}

export default VideoBox;
