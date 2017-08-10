import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    render() {
        return (
            <div className='search-bar'>
                <input
                    value={this.state.term}
                    onChange={e => this.onImputChange(e.target.value)}
                    placeholder='search videos...' />
            </div>
        );
    }

    onImputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
}
export default SearchBar;