import React from 'react';
import { getSearchListData } from 'fetch/Search';
import { connect } from 'react-redux';
import GoodsList from 'components/GoodsList';
import LoadMore from 'components/LoadMore';

class SearchList extends React.PureComponent {
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
    _getSearchListData() {
        // 记录状态
        this.setState({
            isLoading: true
        });
        // 获取数据
        let city = this.props.cityName,
            page = this.state.page,
            category = this.props.category || 'all',
            keywords = this.props.keywords;
        let result = getSearchListData(city, page, category, keywords)
        this._processResult(result);
    }

    _processResult(result) {
        // 增加 page 计数
        const { page } = this.state;
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
            // 更新状态
            this.setState({
                isLoading: false
            });
        })
        .catch(ex => {
            /*global __DEV__*/
            if (__DEV__) {
                console.error('搜索页获取搜索列表数据出错：', ex.message);
            }
            // 更新状态
            this.setState({
                isLoading: false
            });
        });
    }

    componentDidMount() {
        this._getSearchListData();
    }
    
    // 处理加载更多的回调
    loadMoreHandler() {
        this._getSearchListData();
    }

    render() {
        return (
            <div>
                <GoodsList data={this.state.data}/>
                <LoadMore hasMore={this.state.hasMore}
                    isLoading={this.state.isLoading}
                    onLoadMore={this.loadMoreHandler.bind(this)} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cityName: state.userInfo.cityName
    };
}

export default connect(mapStateToProps)(SearchList);