import React from 'react';
class Detail extends React.Component {
    render() {
        return (
            <div>
                This is Detail! And the param is {this.props.match.params.id}
            </div>
        );
    }
}

export default Detail;