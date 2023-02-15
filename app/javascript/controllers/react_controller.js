import { Controller } from '@hotwired/stimulus';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from '../components/App';
import { fetchUsers } from '../redux/blogsSlice';
import store from '../redux/ConfigureStore';

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    store.dispatch(fetchUsers());

    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
