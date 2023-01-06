import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import Fade from '@mui/material/Fade';
import { SnackbarProvider } from 'notistack';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import App from './App';
import { store } from './data/store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        // @ts-ignore
        TransitionComponent={Fade}
      >
        <App />
      </SnackbarProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);