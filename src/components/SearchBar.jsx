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
import PropTypes from 'prop-types';
import './SearchBar.css';

/* Instructions:
Implement game search functionality
*/

function SearchBar(props) {
  /* props contains:
    searchQuery (string)
    requireAddOns (boolean)
    requireVoice (boolean)
    updateSearchQuery (function)
    toggleAddOns (function)
    toggleVoice (function)
  */

  const {
    searchQuery,
    requireAddOns,
    requireVoice,
    updateSearchQuery,
    toggleAddOns,
    toggleVoice,
  } = props;

  return (
    <div className="SearchBar">
      <form>
        <p>
          Search:
          {' '}
          <input
            name="searchQuery"
            type="text"
            value={searchQuery}
            onChange={updateSearchQuery}
          />
        </p>

        <p>
          <input
            name="requireAddOns"
            type="checkbox"
            checked={requireAddOns}
            onChange={toggleAddOns}
          />
          {' '}
          Supports Add-Ons
        </p>

        <p>
          <input
            name="requireVoice"
            type="checkbox"
            checked={requireVoice}
            onChange={toggleVoice}
          />
          {' '}
          Supports Voice
        </p>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  requireAddOns: PropTypes.bool.isRequired,
  requireVoice: PropTypes.bool.isRequired,
  updateSearchQuery: PropTypes.func.isRequired,
  toggleAddOns: PropTypes.func.isRequired,
  toggleVoice: PropTypes.func.isRequired,
};

export default SearchBar;
