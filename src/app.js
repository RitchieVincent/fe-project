import React from 'react';
import {render} from 'react-dom';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'; // Look at that, we are importing a css file... Is this real? No, it's Webpack
import styles from './styles/style.scss'
import routes from './config/routes';


render(routes, document.getElementById('app')) 