import App from '../App.vue';
import { Controller, Route, State, useMiddleware } from '@typeclient/core';
import { CustomMiddleware } from './custom.middleware';
import { Suspense, useApplicationContext } from '@typeclient/vue';
import { CustomState, TCustomState } from './custom.state';

@Controller()
export class CustomController {
  @Route()
  @State(CustomState)
  @useMiddleware(CustomMiddleware)
  /**
   * 通过倒计时中间件对数据的更新
   * 结合生命周期的 `<Suspense />` 组件
   * 很容易重建出一个动态页面加载过程
   */
  Page() {
    const ctx = useApplicationContext<TCustomState>();
    return () => <Suspense v-slots={{
      loading: <div>[{ctx.state.count}s] Loading Page ...</div>
    }}><App /></Suspense>
  }
}