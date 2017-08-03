import React from 'react';
import get from 'fetch/get';
import HomeReco from 'components/HomeReco';

class AD extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            recoData: []
        }
    }
    componentDidMount() {
        get('/api/home/reco')
        .then(res => {
            return res.json();
        })
        .then(json => {
            this.setState({
                recoData: json
            });
        })
    }
    
    render() {
        return (
            <div>
                {this.state.recoData.length
                    ? <HomeReco recoData={this.state.recoData} />
                    : <div>加载中...</div>
                }
            </div>
        );
    }
}

export default AD;