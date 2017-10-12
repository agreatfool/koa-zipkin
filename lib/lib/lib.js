"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zipkin = require("zipkin");
const url = require("url");
function getHeaderValue(req, headerName) {
    // req.get() 方法本身就是不区分大小写的，eg：X-B3-TraceId 和 x-b3-traceid 可以获取相同的数据
    return req.get(headerName);
}
exports.getHeaderValue = getHeaderValue;
function containsRequiredHeaders(req) {
    return getHeaderValue(req, zipkin.HttpHeaders.TraceId) !== ''
        && getHeaderValue(req, zipkin.HttpHeaders.SpanId) !== '';
}
exports.containsRequiredHeaders = containsRequiredHeaders;
function formatRequestUrl(req) {
    const parsed = url.parse(req.originalUrl);
    return url.format({
        protocol: req.protocol,
        host: req.header['host'],
        pathname: parsed.pathname,
        search: parsed.search
    });
}
exports.formatRequestUrl = formatRequestUrl;
function stringToBoolean(str) {
    return str === '1';
}
exports.stringToBoolean = stringToBoolean;
function stringToIntOption(str) {
    try {
        return new zipkin.option.Some(parseInt(str));
    }
    catch (err) {
        return zipkin.option.None;
    }
}
exports.stringToIntOption = stringToIntOption;
//# sourceMappingURL=lib.js.map