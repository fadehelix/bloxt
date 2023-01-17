import React from "react";
import { render, screen, waitFor } from '@testing-library/react';
import { createStore, StoreProvider } from 'easy-peasy';
import { SnackbarProvider } from 'notistack';
import { model } from '../../data/store';

import Notification from './Notification';

const message = 'some error';

beforeAll(() => {
  const store = createStore(model, {
    initialState: { notification: { type: 'success', message } },
  });
  const app = (
    <StoreProvider store={store}>
      <SnackbarProvider maxSnack={3}>
        <Notification />
      </SnackbarProvider>
    </StoreProvider>
  );

  render(app);
});

it('Display Notification', async () => {
  await waitFor(() => {
    // @ts-ignore
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
