// @flow
import * as React from 'react';
import styled from 'styled-components';
import VideoBox from '../components/VideoBox';
const Container = styled.div`
  max-width: 1140px;
  margin: auto;
  background-color: pink;
`;
// 影片圖片 118px
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 250px 250px 250px;
`;

// XXX VideoBox 會依賴 grid, 其實好像還好
export function Home(): React.Node {
  return (
    <Container>
      <Wrapper>
        <VideoBox />
        <VideoBox />
        <VideoBox />
        <VideoBox />
        <VideoBox />
        <VideoBox />
        <VideoBox />
        <VideoBox />
        <VideoBox />
        <VideoBox />
        <VideoBox />
        <VideoBox />
      </Wrapper>
    </Container>
  );
}

export default Home;
