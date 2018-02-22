export default function createUrl(url,params) {
    if (params !== null)
        Object.keys(params).forEach(key => (url.searchParams).append(key, params[key]));
}