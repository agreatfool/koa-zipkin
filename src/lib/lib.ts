import * as zipkin from 'zipkin';
import * as url from 'url';
import {GatewayRequest} from 'sasdn';

export function getHeaderValue(req: GatewayRequest, headerName: string): string {
    // req.get() 方法本身就是不区分大小写的，eg：X-B3-TraceId 和 x-b3-traceid 可以获取相同的数据
    return req.get(headerName);
}

export function containsRequiredHeaders(req: GatewayRequest): boolean {
    return getHeaderValue(req, zipkin.HttpHeaders.TraceId) !== ''
        && getHeaderValue(req, zipkin.HttpHeaders.SpanId) !== '';
}

export function formatRequestUrl(req: GatewayRequest): string {
    const parsed = url.parse(req.originalUrl);
    return url.format({
        protocol: req.protocol,
        host: req.header['host'],
        pathname: parsed.pathname,
        search: parsed.search
    });
}

export function stringToBoolean(str: string): boolean {
    return str === '1';
}

export function stringToIntOption(str: string): any {
    try {
        return new zipkin.option.Some(parseInt(str));
    } catch (err) {
        return zipkin.option.None;
    }
}