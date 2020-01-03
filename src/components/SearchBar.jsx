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
    this.state = {hi: 'hi'}; // update later
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Search:
            <input type="text" />
          </label>

          <p>
            <input type="checkbox" />
            {' '}
            Supports Add-Ons
          </p>

          <p>
            <input type="checkbox" />
            {' '}
            Supports Voice
          </p>

          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
