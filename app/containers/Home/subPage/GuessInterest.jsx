import React from 'react';
import { getGuessInterestData } from 'fetch/Home';
import { connect } from 'react-redux';
import HomeGuessInterest from 'components/HomeGuessInterest';
import LoadMore from 'components/LoadMore';

class GuessInterest extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            page: 0,
            hasMore: true,
            isLoading: false
        };
    }
    
    /**
     * 获取猜你喜欢的数据，并更新state
     */
    _getGuessInterestData() {
        let city = this.props.cityName;
        let page = this.state.page;
        getGuessInterestData(city, page)
        .then(res => {
            return res.json();
        })
        .then(json => {
            this.setState({
                page: page + 1,
                hasMore: json.hasMore,
                data: this.state.data.concat(json.data)
            });
        })
        .catch(ex => {
            if (__DEV__) {
                console.error('主页获取猜你喜欢数据出错：', ex.message);
            }
        })
    }

    componentDidMount() {
        this._getGuessInterestData();
    }

    // 处理加载更多的回调
    loadMoreHandler() {
        this._getGuessInterestData()
    }
    
    render() {
        return (
            <div>
                <HomeGuessInterest data={this.state.data} title="猜你喜欢" />
                <LoadMore hasMore={this.state.hasMore}
                          isLoading={this.state.isLoading}
                          onLoadMore={this.loadMoreHandler.bind(this)}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cityName: state.userInfo.cityName
    };
}

export default connect(mapStateToProps)(GuessInterest);