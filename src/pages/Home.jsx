// @flow
import * as React from 'react';
import { useState, useEffect } from 'react';
import VideoBox from '../components/VideoBox';
import ReactPaginate from 'react-paginate';
import '../sass/Home.scss';
import ApiService from '../services/youtubeApiService';
import type { Items } from '../services/youtubeApiService';
// XXX VideoBox 會依賴 grid, 其實好像還好
export function Home(): React.Node {
  const [data, setData] = useState<Items[] | null>([]);

  useEffect(() => {
    setData(ApiService.getPage(0));
  }, []);
  const handlePageClick = ({ selected }: { selected: number }) => {
    console.log('handle page click', selected);
    setData(ApiService.getPage(selected));
  };

  return (
    <div className="container">
      <section className="wrapper">
        {data !== null &&
          data.map((d, idx) => (
            <VideoBox
              key={idx}
              id={d.id}
              thumbnail={d.snippet.thumbnails.default}
              title={d.snippet.title}
              description={d.snippet.description}
              duration={d.contentDetails.duration}
            />
          ))}
      </section>

      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={9}
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
