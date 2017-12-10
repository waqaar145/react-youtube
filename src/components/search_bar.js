import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {term : ''}
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({term : event.target.value})}
         />
        current value is : {this.state.term}
      </div>
    );
  }


}

export default SearchBar;
