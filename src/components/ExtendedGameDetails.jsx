/**
 * ************************************
 *
 * @module  ExtendedGameDetails.jsx
 * @author Timothy Mai
 * @date 1/2/20
 * @description displays additional game information
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';

/*
Component must show the following data
- Game slug
- List of game file names
- List of category section names
*/

function ExtendedGameDetails(props) {
  /* props contains the following:
  - slug (string)
  - gameFiles (array of strings)
  - categorySections (array of strings)
  */

  const {
    slug,
    gameFiles,
    categorySections,
  } = props;

  const gameFilesLi = gameFiles.map((file) => <li>{file}</li>);

  const categorySectionsLi = categorySections.map((cat) => <li>{cat}</li>);

  return (
    <>
      <p>
        Slug:
        {` ${slug}`}
      </p>

      <div>
        <p>
          Game Files:
        </p>
        <ul>
          {gameFilesLi.length ? gameFilesLi : <li>None</li>}
        </ul>
      </div>

      <div>
        <p>
          Category Sections:
        </p>
        <ul>
          {categorySectionsLi.length ? gameFilesLi : <li>None</li>}
        </ul>
      </div>
    </>
  );
}

ExtendedGameDetails.propTypes = {
  slug: PropTypes.string.isRequired,
  gameFiles: PropTypes.arrayOf(PropTypes.string).isRequired,
  categorySections: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExtendedGameDetails;
