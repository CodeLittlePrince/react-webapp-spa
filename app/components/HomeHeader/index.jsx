import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class HomeHeader extends React.PureComponent {
    render() {
        return (
            <header class="home-header l-clearfix">
                <Link to="/city">
                    <div class="l-left location">
                        {this.props.cityName}<i class="icon-arrow-down"></i>
                    </div>
                </Link>
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

HomeHeader.propTypes = {
    cityName: PropTypes.string
};

HomeHeader.defaultProps = {
    cityName: '杭州'
};

export default HomeHeader;