import React from 'react'

function List({data}) {
  return (
    <div>
      {data.map((e, i) => (
        <div className="person">
          <img src={e.image} alt="" />
          <div>
            <h2>{e.name}</h2>
            <p>{e.age} years</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List