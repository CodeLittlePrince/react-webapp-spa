import './style';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchInput from 'components/SearchInput';

class HomeHeader extends React.PureComponent {

    submitHandler(keywords) {
        this.props.history.push('/search/' + 'all/' +  encodeURIComponent(keywords))
    }

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
                <SearchInput class="searchInput" onSubmit={this.submitHandler.bind(this)} />
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