import App from '../App.vue';
import { Controller, Route, useMiddleware } from '@typeclient/core';
import { CustomMiddleware } from './custom.middleware';
import { Suspense } from '@typeclient/vue';

@Controller()
export class CustomController {
  @Route()
  @useMiddleware(CustomMiddleware)
  Page() {
    return () => <Suspense v-slots={{
      loading: <div>Loading Page ...</div>
    }}><App /></Suspense>
  }
}