import './style.scss';
import React from 'react';

class CurrentCity extends React.PureComponent {
    render() {
        return (
            <div class="currentCity">{this.props.cityName}</div>
        );
    }
}

export default CurrentCity;