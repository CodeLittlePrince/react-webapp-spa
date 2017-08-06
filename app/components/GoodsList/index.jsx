import './style';
import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

class GoodsList extends React.PureComponent {
    render() {
        return (
            <div class="goodsList">
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

GoodsList.propTypes = {
    data: PropTypes.array
};

GoodsList.defaultProps = {
    data: []
};

export default GoodsList;