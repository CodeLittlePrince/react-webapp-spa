import React from 'react';
import { connect } from 'react-redux';
import HomeHeader from 'components/HomeHeader';
import Category from 'components/Category';
import AD from './subPage/Ad';
class Home extends React.PureComponent {
    render() {
        return (
            <div>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <HomeHeader cityName={this.props.cityName} />
                <Category />
                <AD />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cityName: state.userInfo.cityName
    };
}

export default connect(mapStateToProps)(Home);