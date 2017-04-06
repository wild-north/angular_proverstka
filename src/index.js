import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import App from './app/app';

import { header } from './app/header';
import { footer } from './app/footer';

import City from './app/city';
import Current from './app/city/current';
import Five from './app/city/five';
import Sixteen from './app/city/sixteen';

import './index.scss';


angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .component('app', App)
  .component('city', City)
  .component('current', Current)
  .component('five', Five)
  .component('sixteen', Sixteen)
  .component('fountainHeader', header)
  .component('fountainFooter', footer);
