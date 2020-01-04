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
      requireAddOns: false,
      requireVoice: false,
    }; // update when adding Redux

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchQuery, requireAddOns, requireVoice } = this.state;

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
              name="requireAddOns"
              type="checkbox"
              checked={requireAddOns}
              onChange={this.handleInputChange}
            />
            {' '}
            Supports Add-Ons
          </p>

          <p>
            <input
              name="requireVoice"
              type="checkbox"
              checked={requireVoice}
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
