import './style';
import React from 'react';
import Header from 'components/Header';
import SearchInput from 'components/SearchInput';

class SearchHeader extends React.PureComponent {
    submitHandler(keywords) {
        let category = this.props.category;
        // https://github.com/ReactTraining/react-router/issues/1982  解决人：PFight
        // 解决react-router v4改变查询参数并不会刷新或者说重载组件的问题
        this.props.history.push('/empty');
        setTimeout(() => {
            this.props.history.replace('/search/' + category + '/' + encodeURIComponent(keywords));
        });
    }
    render() {
        return (
            <div class="searchHeader">
                <Header>
                    <SearchInput onSubmit={this.submitHandler.bind(this)}/>
                </Header>
            </div>
        );
    }
}

export default SearchHeader;