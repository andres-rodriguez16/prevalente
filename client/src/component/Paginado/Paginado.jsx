import React from 'react';

function Paginado({ previusPag, nextPag, actualPage }) {
  return (
    <div>
      {actualPage === 1 ? (
        <>
          <p>{actualPage}</p>
          <button onClick={() => nextPag()}>next</button>
        </>
      ) : (
        <>
          <button onClick={() => previusPag()}>previusPag</button>{' '}
          <p>{actualPage}</p>
          <button onClick={() => nextPag()}>next</button>
        </>
      )}
    </div>
  );
}

export default Paginado;
