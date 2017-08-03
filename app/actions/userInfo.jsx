import * as actionTypes from 'constants/userInfo';

export function updateUserCity(cityName) {
    return { type: actionTypes.USERINFO_UPDATE_CITYNAME, cityName };
}