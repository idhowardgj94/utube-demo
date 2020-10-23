// @flow
import * as React from 'react';
import { useState } from 'react';
import VideoBox from '../components/VideoBox';
import ReactPaginate from 'react-paginate';
import '../sass/Home.scss';

// XXX VideoBox 會依賴 grid, 其實好像還好
export function Home(): React.Node {
  const [pageCount, setPageCount] = useState(0);
  const handlePageClick = () => {
    console.log('handle page click');
  };
  return (
    <div className="container">
      <section className="wrapper">
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
      </section>

      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default Home;
