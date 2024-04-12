// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// // import { blancAction, startUp } from '../store/actions';
//
// export default () => {
//   // eslint-disable-next-line @typescript-eslint/no-shadow
//   const state = useSelector((state: any) => state);
//   const dispatch = useDispatch();
//
//   useEffect(() => {
//     console.log('blac');
//     // dispatch(startUp())
//   }, []);
//
//   return <div>Houses</div>;
// };
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getHouses } from '../store/actions';

// import { RootState } from '../store/types';

const HousesPage = (): JSX.Element => {
  const dispatch = useDispatch();
  // const state = useSelector((state: any) => state);
  // console.log({ state });
  // const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'STARTAPP' });
  }, [dispatch]);

  const handleClick = () => {
    dispatch(getHouses());
  };

  return (
    <div>
      <h1>house</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default HousesPage;
