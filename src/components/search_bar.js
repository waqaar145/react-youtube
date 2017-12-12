import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {term : ''}
  }

  render() {
    return (
      <div className="search_bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChaneg(event.target.value)}
         />

      </div>
    );
  }

  onInputChaneg(term){
    this.setState({term});
    this.props.onSearchTermChange(term)
  }


}

export default SearchBar;
