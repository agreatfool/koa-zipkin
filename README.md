# zipkin-instrumentation-koa

Koa middleware and instrumentation that adds Zipkin tracing to the application.

## Install

```bash
$ npm install --save zipkin-instrumentation-koa
```

## API

### middleware([info])

#### info
##### tracer

Type: `zipkin.Tracer` or `false`<br>
Default: `false`

##### serviceName

Type: `string`<br>
Default: `unknown`

##### port

Type: `number`<br>
Default: `0`

## Examples

### Typeorm DB Connection Proxy

This library will wrap grpc client proxy to record traces.

```typescript
import * as Koa from 'koa';
import * as KoaInstrumentation from "../index";
import * as zipkin from 'zipkin';

const tracer = new zipkin.Tracer({
    ctxImpl: new zipkin.ExplicitContext(),
    recorder: new zipkin.ConsoleRecorder()
});

const app = new Koa();

// Add the Zipkin middleware
app.use(KoaInstrumentation.middleware({tracer}));
```