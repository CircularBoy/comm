// import { Box, Container } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import {blank, startApp} from '../store/actions';

const RootModule = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(startApp());
    // dispatch(blank());
  }, [dispatch]);

  return (
    <>
        <div>Hey hey home</div>
    </>
  );
};

export default RootModule;
