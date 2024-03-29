import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import ScrollToTop from './Hook/ScrollToTop'


ReactDOM.render(
  <React.StrictMode>
      <Router>
          <ScrollToTop />
          <App />
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)