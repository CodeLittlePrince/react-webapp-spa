import 'static/scss/common.scss';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import get from 'fetch/get';
import LocalStorage from 'util/localStorage';
import { CITYNAME } from 'config/localStorageKey';
import * as userInfoActions from 'actions/userinfo';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInitDone: false
        }
    }

    /**
     * @return 返回获取到的城市名字
     */
    _getCityName() {
        let cityName = LocalStorage.getItem(CITYNAME);
        if (cityName == null) {
            cityName = '上海';
        }
        return cityName;
    }

    componentDidMount() {
        // 从localStorage中获取本地城市数据
        let cityName = this._getCityName();
        // 数据需要放到redux中
        this.props.onUpdateCity(cityName);
        // 更新加载中状态
        this.setState({
            isInitDone: true
        });
    }
    
    render() {
        return (
            <div>
                {this.state.isInitDone
                    ? this.props.children
                    : <div>加载中...</div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
	return {
		cityName: state.cityName
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onUpdateCity: cityName => {
			dispatch(userInfoActions.updateUserCity(cityName));
		}
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));