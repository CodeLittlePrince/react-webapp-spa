import get from '../get';

export function getSearchListData(city, page, category, keywords) {
    let url = 'api/search/SearchList/'
        + encodeURIComponent(city) + '/'
        + page + '/'
        + encodeURIComponent(category);
    if (!!keywords) {
        url += '/' + encodeURIComponent(keywords);
    }
    return get(url);
}