/**
 * 将对象转换为a=1&b=2这样的字符串
 * @param {*object} obj 需要转换的对象
 * @return {*string} 返回转换结果
 */
function obj2params(obj) {
    var result = '';
    var item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }
    if (result) {
        result = result.slice(1);
    }
    return result;
}
/**
 * 对fetch的post封装
 * @param {*string} url 请求地址
 * @param {*object} paramsObj 请求附带的参数
 * @return fetch返回的数据
 */
export default function post(url, paramsObj) {
    return fetch(url, {
        credentials: 'include',
        /*
        Credentials' Description:
        omit: Never send cookies. (default)
        same-origin: Send cookies if the URL is on the same origin as the calling script.
        nclude: Always send cookies, even for cross- origin calls.
        */
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: obj2params(paramsObj)
    })
}