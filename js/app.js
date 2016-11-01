'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import AppView from './AppView';

let appContainer = document.getElementById('app');
ReactDOM.render(
  React.createElement(AppView),
  appContainer
);
