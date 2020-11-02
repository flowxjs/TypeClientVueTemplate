import { ComposeNextCallback, Context, Middleware, MiddlewareTransform } from "@typeclient/core";
import { TCustomState } from './custom.state';

// 倒计时中间件
@Middleware()
export class CustomMiddleware implements MiddlewareTransform<Context<TCustomState>> {
  async use(ctx: Context<TCustomState>, next: ComposeNextCallback) {
    await new Promise(resolve => {
      const timer = setInterval(() => {
        if (ctx.state.count === 0) {
          clearInterval(timer);
          return resolve();
        }
        ctx.state.count--;
      }, 1000);
    });
    await next();
  }
}