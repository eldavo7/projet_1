import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const sculpture = sculptureList[index];

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
    <div className="card border-primary text-center">
      <img src={sculpture.url} alt={sculpture.alt} className="card-img-top rounded" />
      <div className="card-body">
        <h2 className="card-title text-primary">
          <i>{sculpture.name}</i> by {sculpture.artist}
        </h2>
        <p className="card-subtitle mb-3 text-muted">
          ({index + 1} of {sculptureList.length})
        </p>
        <button onClick={handleMoreClick} className="btn btn-warning m-2">
          {showMore ? 'Hide' : 'Show'} details
        </button>
        <button onClick={handleNextClick} className="btn btn-success m-2">
          Next
        </button>
        {showMore && <p className="card-text mt-3 text-dark">{sculpture.description}</p>}
      </div>
    </div>
  </div>

  );
}
