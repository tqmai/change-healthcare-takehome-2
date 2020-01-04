/**
 * ************************************
 *
 * @module  SearchBar.jsx
 * @author Timothy Mai
 * @date 1/2/20
 * @description provides search functionality
 *
 * ************************************
 */

import React from 'react';

/* Instructions:
Implement game search functionality
*/

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      addOns: false,
      voice: false,
    }; // update when adding Redux

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    console.log('target', target);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    console.log('name', name)

    this.setState({
      [name]: value,
    });

    console.log(this.state);
  }

  render() {
    const { searchQuery, addOns, voice } = this.state;

    return (
      <div>
        <form>
          <p>
            Search:
            {' '}
            <input
              name="searchQuery"
              type="text"
              value={searchQuery}
              onChange={this.handleInputChange}
            />
          </p>

          <p>
            <input
              name="addOns"
              type="checkbox"
              checked={addOns}
              onChange={this.handleInputChange}
            />
            {' '}
            Supports Add-Ons
          </p>

          <p>
            <input
              name="voice"
              type="checkbox"
              checked={voice}
              onChange={this.handleInputChange}
            />
            {' '}
            Supports Voice
          </p>
        </form>
      </div>
    );
  }
}

export default SearchBar;
