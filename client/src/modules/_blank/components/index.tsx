import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { blank, startApp } from '../store/actions';

const Blank = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startApp());
  }, [dispatch]);

  return (
    <>
      <h1>Blank</h1>
      <button
        onClick={() => {
          dispatch(blank());
        }}
      >
        Submit blank
      </button>
    </>
  );
};

export default Blank;
