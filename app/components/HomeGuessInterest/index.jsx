import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
import './style.scss';

class HomeGuessInterest extends React.PureComponent {
    render() {
        return (
            <div class="home-guessInterest">
                <h3>{this.props.title}</h3>
                <ul>
                    {
                        this.props.data.map((item, index) => {
                            return <Item key={index} item={item} />
                        })
                    }
                </ul>
            </div>
        );
    }
}

HomeGuessInterest.propTypes = {
    data: PropTypes.array
};

HomeGuessInterest.defaultProps = {
    data: []
};

export default HomeGuessInterest;