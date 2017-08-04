import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import CurrentCity from 'components/CurrentCity';
import CityList from 'components/CityList';
import { updateUserCity } from 'actions/userInfo';
import localStorage from 'util/localStorage';

class City extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    /**
     * 更新Redux userInfo的cityName，以及localStorage的城市名
     * @param {*string} newCityName 新的城市名，由子组件回调提供
     */
    updateCityHandler(newCityName) {
        // 更新redux
        this.props.onUpdateCity(newCityName);
        // 更新localStorage
        localStorage.setItem('cityName', newCityName);
        // 返回上一页
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Header title="选择城市" />
                <CurrentCity cityName={this.props.cityName} />
                <CityList onUpdateCity={this.updateCityHandler.bind(this)}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cityName: state.userInfo.cityName
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onUpdateCity: cityName => {
            dispatch(updateUserCity(cityName))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);