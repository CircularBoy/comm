import { Box, Container } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { startApp } from '../store/actions';

const RootModule = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startApp());
  }, [dispatch]);

  return (
    <>
      <Box display="grid" gridGap={2} gridAutoFlow="row dense">
        <Container></Container>
      </Box>
    </>
  );
};

export default RootModule;
