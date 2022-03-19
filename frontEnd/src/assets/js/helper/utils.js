export const parseRequestURL = () => {
    const url = location.hash.slice(2),
        request = {};

    [request.resourse, request.id, request.description, request.img] = url.split('/');

    return request;
}