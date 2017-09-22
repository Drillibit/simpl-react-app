import React from 'react';
import { render } from 'react-dom';
import './style/css/main.sass';
import Scoreboard from './src/containers/Scoreboard';

render(
  <Scoreboard />,
  document.getElementById('root')
);
