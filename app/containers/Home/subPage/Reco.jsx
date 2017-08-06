import React from 'react';
import HomeReco from 'components/HomeReco';
import { getRecoData } from 'fetch/Home';

class AD extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            recoData: []
        }
    }

    /**
     * fetch推荐数据，然后更新state
     */
    _getRecoData() {
        getRecoData()
        .then(res => {
            return res.json();
        })
        .then(json => {
            this.setState({
                recoData: json
            });
        })
        .catch(ex => {
            /*global __DEV__*/
            if (__DEV__) {
                // 虽然这个项目中数据是前端定的，几乎不可能报错
                // 但是，如果proxy到线下后端的服务器拿模拟数据，就会可能出现数据结构不符等问题
                // 所以，fetch数据一定要catch一下
                console.error('首页半次元周边推荐数据报错：', ex.message);
            }
        });
    }

    componentDidMount() {
        this._getRecoData();
    }

    render() {
        return (
            <div>
                {this.state.recoData.length
                    ? <HomeReco data={this.state.recoData} title="半次元制品周边推荐"/>
                    : <div>加载中...</div>
                }
            </div>
        );
    }
}

export default AD;