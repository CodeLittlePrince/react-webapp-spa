import './style.scss';
import React from 'react';
import Header from 'components/Header';
import SearchInput from 'components/SearchInput';

class SearchHeader extends React.PureComponent {
    submitHandler(keywords) {
        let category = this.props.category;
        this.props.history.push('/search/' + category + '/' + encodeURIComponent(keywords));
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