import React from 'react'
import Tour from './Tour';

function Tours({ tours, deleteTour }) {
  return (
    <div className="title">
      <h2>Our Tours</h2>
      <div className="underline"></div>
      <div>
        {tours.map((e, i) => {
          return <Tour key={e.id} {...e} deleteTour={deleteTour} />;
        })}
      </div>
    </div>
  );
}

export default Tours