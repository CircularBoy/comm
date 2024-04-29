// import { ChakraProvider } from '@chakra-ui/react';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import router from './config/router';
import store from './config/store';
import Layout from "./components/Layout.tsx";

function App() {
  return (
    <ReduxProvider store={store}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ReduxProvider>
  );
}

export default App;
