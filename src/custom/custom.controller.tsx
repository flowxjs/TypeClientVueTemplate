import { Controller, Route } from '@typeclient/core';
import App from '../App.vue';

@Controller()
export class CustomController {
  @Route()
  Page() {
    return () => <App />
  }
}