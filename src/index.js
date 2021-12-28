import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import './styles/style.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarDay, faHome, faStar, faTasks, faBriefcase, faGraduationCap} from '@fortawesome/free-solid-svg-icons'
library.add(faHome, faTasks, faStar, faCalendarDay, faBriefcase, faGraduationCap)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

