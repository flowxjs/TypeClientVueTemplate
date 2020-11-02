import { ComposeNextCallback, Context, Middleware, MiddlewareTransform } from "@typeclient/core";

@Middleware()
export class CustomMiddleware implements MiddlewareTransform {
  async use(ctx: Context, next: ComposeNextCallback) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await next();
  }
}