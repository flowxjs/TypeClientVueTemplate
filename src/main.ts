import './registerServiceWorker';
import { VueApplication } from '@typeclient/vue';
import { bootstrp, usePopStateHistoryMode } from '@typeclient/core';
import { CustomController } from '@/custom/custom.controller';

// start popstate mode
usePopStateHistoryMode();

// create new Vue application
const app = new VueApplication({
  el: '#app',
  prefix: '/',
  caseSensitive: true,
  ignoreTrailingSlash: true,
  maxParamLength: Infinity,
});

// setup controllers
app.setController(CustomController);

// run app
bootstrp();
