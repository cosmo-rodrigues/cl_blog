import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MyThemeProvier } from './styles/MyThemeProvier';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyThemeProvier>
        <Provider store={store}>
          <App />
        </Provider>
      </MyThemeProvier>
    </BrowserRouter>
  </React.StrictMode>
);
