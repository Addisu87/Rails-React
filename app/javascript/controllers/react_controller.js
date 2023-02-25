import { Controller } from '@hotwired/stimulus';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from '../components/App';
import store from '../redux/store';
import { register } from '../redux/slices/userSlice';

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    store.dispatch(register());

    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    );
  }
}
