import React from 'react';
import SearchHeader from 'components/SearchHeader';
import SearchList from './subPage/SearchList';

class Search extends React.PureComponent {
    render() {
        const params = this.props.match.params;
        return (
            <div>
                <SearchHeader history={this.props.history} category={params.category} />
                <SearchList category={params.category} keywords={params.keywords} />
            </div>
        );
    }
}

export default Search;