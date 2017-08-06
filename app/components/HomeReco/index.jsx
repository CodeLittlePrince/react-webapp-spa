import './style';
import React from 'react';
import PropTypes from 'prop-types';

class HomeReco extends React.PureComponent {
    render() {
        return (
            <div class="home-recommend">
                <h3>{this.props.title}</h3>
                <ul>
                    {this.props.data.map((item, index) => {
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
    title: PropTypes.string,
    recoData: PropTypes.array
};

HomeReco.defaultProps = {
    title: '',
    recoData: []
};

export default HomeReco;