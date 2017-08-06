import get from '../get';

export function getRecoData() {
    return get('/api/home/reco');
}

export function getGuessInterestData(city, page) {
    return get('api/home/guessInterest/'
        + encodeURIComponent(city)
        + '/'
        + page);
}