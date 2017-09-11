# zipkin-instrumentation-koa

Koa middleware and instrumentation that adds Zipkin tracing to the application.

## Koa Middleware

```typescript
import * as Koa from 'koa';
import * as KoaInstrumentation from "zipkin-instrumentation-koa";
import {Tracer, ExplicitContext, ConsoleRecorder} from "zipkin";

const ctxImpl = new ExplicitContext();
const recorder = new ConsoleRecorder();
const tracer = new Tracer({ctxImpl, recorder}); // configure your tracer properly here

const app = new Koa();

// Add the Zipkin middleware
app.use(KoaInstrumentation.middleware({tracer}));
```