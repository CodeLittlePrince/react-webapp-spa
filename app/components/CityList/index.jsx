import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';

class CityList extends React.PureComponent {

    /**
     * 选择城市以后，更新城市数据
     * @param {*object} e 事件event
     */
    ClickHandler (e) {
        let { target } = e;
        // 事件代理
        if (target.nodeName === 'SPAN') {
            let newCityName = target.textContent;
            if (this.props.onUpdateCity) {
                this.props.onUpdateCity(newCityName);
            }
        }
    }

    render() {
        return (
            <div class="cityList">
                <h3>热门城市</h3>
                <ul class="l-clearfix" onClick={this.ClickHandler.bind(this)}>
                    <li><span>北京</span></li>
                    <li><span>上海</span></li>
                    <li><span>深圳</span></li>
                    <li><span>杭州</span></li>
                    <li><span>广州</span></li>
                    <li><span>厦门</span></li>
                    <li><span>珠海</span></li>
                    <li><span>天津</span></li>
                    <li><span>河北</span></li>
                    <li><span>金华</span></li>
                    <li><span>宁波</span></li>
                    <li><span>三亚</span></li>
                    <li><span>海口</span></li>
                    <li><span>苏州</span></li>
                    <li><span>长沙</span></li>
                    <li><span>新疆</span></li>
                    <li><span>内蒙</span></li>
                    <li><span>舟山</span></li>
                    <li><span>台北</span></li>
                    <li><span>香港</span></li>
                    <li><span>澳门</span></li>
                </ul>
            </div>
        );
    }
}

CityList.propTypes = {
    onUpdateCity: PropTypes.func
};

export default CityList;