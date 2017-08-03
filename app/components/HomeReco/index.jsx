import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class HomeReco extends React.PureComponent {
    render() {
        return (
            <div class="home-recommend">
                <h3>半次元制品周边推荐</h3>
                <ul>
                    {this.props.recoData.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.link}>
                                    <img src={item.img} alt={item.title}/>
                                    <p>{item.title}</p>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

HomeReco.propTypes = {
    recoData: PropTypes.array
};

HomeReco.defaultProps = {
    recoData: []
};

export default HomeReco;