import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraBaseProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraBaseProvider>
  </React.StrictMode>
);
