const initState = {};

export default function userInfo(state = initState, action) {
    switch (action.type) {
        case 'USERINFO_UPDATE_CITYNAME':
        	return Object.assign({}, state, {
                cityName: action.cityName
        	})
        default:
            return state;
    }
} 