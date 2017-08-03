import React from 'react';
import './style.scss';
import PropType from 'prop-types';

class HomeHeader extends React.PureComponent {
    render() {
        return (
            <header class="home-header l-clearfix">
                <div class="l-left location">
                    {this.props.cityName}<i class="icon-arrow-down"></i>
                </div>
                <div class="l-right user">
                    <i class="icon-user"></i>
                </div>
                <div class="searchBox">
                    <div class="search">
                        <i className="icon-search"></i>
                        <input type="text" placeholder="请输入关键字..."/>
                    </div>
                </div>
            </header>
        );
    }
}

HomeHeader.propType = {
    cityName: PropType.string
};

HomeHeader.defaultProps = {
    cityName: '杭州'
};

export default HomeHeader;