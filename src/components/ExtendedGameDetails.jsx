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
  - gameFiles (array of objects)
  - categorySections (array of objects)
  */

  const {
    slug,
    gameFiles,
    categorySections,
  } = props;

  const gameFilesLi = gameFiles.map((fileObj) => (
    <li key={fileObj.Id}>
      {fileObj.FileName}
    </li>
  ));

  const categorySectionsLi = categorySections.map((catObj) => (
    <li key={catObj.ID}>
      {catObj.Name}
    </li>
  ));

  return (
    <>
      <p>
        Slug:
        {' '}
        {slug}
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
          {categorySectionsLi.length ? categorySectionsLi : <li>None</li>}
        </ul>
      </div>
    </>
  );
}

ExtendedGameDetails.propTypes = {
  slug: PropTypes.string.isRequired,
  gameFiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  categorySections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ExtendedGameDetails;
