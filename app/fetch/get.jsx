/**
 * 封装fetch的get请求
 * @param {*string} url 请求地址
 * @return fetch返回的数据
 */
export default function get(url) {
    return fetch(url, {
        headers: {
            'Accept': 'application/json, text/plain, */*',
        }
    });
}