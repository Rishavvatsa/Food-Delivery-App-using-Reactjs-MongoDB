import React from 'react';

import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateProvider } from './Context/StateProvider';
import { initialstate } from './Context/initialstate';
import reducer from './Context/reducer';
import { Provider } from "react-redux";
import { store } from './utils/index';
import App from './App';
import { createRoot } from 'react-dom/client';

// Wrap your routing elements with BrowserRouter
const routing = (
  <Router>
    <App />
  </Router>
);
const root = createRoot(document.getElementById("root"));
root.render(
  // Wrap both Redux Provider and your routing
  <Provider store={store}>
    <StateProvider initialState={initialstate} reducer={reducer}>
      {routing}
    </StateProvider>
  </Provider>
);
