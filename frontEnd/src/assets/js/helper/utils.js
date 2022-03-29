export const parseRequestURL = () => {
    const url = location.hash.slice(2),
        request = {};
    request.resourse = url.split('/');
    return request;
}