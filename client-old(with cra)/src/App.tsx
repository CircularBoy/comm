import { ChakraProvider } from '@chakra-ui/react';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import router from './config/router';
import store from './config/store';

function App() {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </ReduxProvider>
  );
}

export default App;
