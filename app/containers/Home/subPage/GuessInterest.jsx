import React from 'react';
import { getGuessInterestData } from 'fetch/Home';
import { connect } from 'react-redux';
import GoodsList from 'components/GoodsList';
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
        // 记录状态
        this.setState({
            isLoading: true
        })
        // 获取数据
        let city = this.props.cityName;
        let page = this.state.page;
        let result = getGuessInterestData(city, page)
        this._processResult(result);
        // 更新状态
        this.setState({
            isLoading: false
        })
    }

    _processResult(result) {
        // 增加 page 计数
        const page = this.state.page;
        this.setState({
            page: page + 1
        })
        // 处理 fetch返回结果
        result.then(res => {
            return res.json();
        })
        .then(json => {
            this.setState({
                hasMore: json.hasMore,
                data: this.state.data.concat(json.data)
            });
        })
        .catch(ex => {
            /*global __DEV__*/
            if (__DEV__) {
                console.error('主页获取猜你喜欢数据出错：', ex.message);
            }
        });
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
            <div class="home-guessInterest">
                <h3>猜你喜欢</h3>
                <GoodsList data={this.state.data} />
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