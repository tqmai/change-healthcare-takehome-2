/**
 * ************************************
 *
 * @module  App.jsx
 * @author Timothy Mai
 * @date 12/31/19
 * @description outer container of app, holds loading page and main app
 *
 * ************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as dataActions from './actions/dataActions';
import './App.css';
import LoadingPage from './components/LoadingPage';
import GameDataContainer from './containers/GameDataContainer';

const mapStateToProps = (store) => ({
  isLoading: store.data.isLoading,
  gamesData: store.data.gamesData,
  totalNumOfGames: store.data.totalNumOfGames,
});

const mapDispatchToProps = (dispatch) => ({
  addGameData: (data) => dispatch(dataActions.addGameData(data)),
  setTotalNumOfGames: (num) => dispatch(dataActions.setTotalNumOfGames(num)),
  toggleLoadingState: () => dispatch(dataActions.toggleLoadingState()),
});

function App(props) {
  const {
    isLoading,
    gamesData,
    totalNumOfGames,
    addGameData,
    setTotalNumOfGames,
    toggleLoadingState,
  } = props;

  return (
    <div className="App">
      <h1>
        The Greatest Game Data Loader Ever
      </h1>

      {isLoading
        ? (
          <LoadingPage
            gamesData={gamesData}
            totalNumOfGames={totalNumOfGames}
            addGameData={addGameData}
            setTotalNumOfGames={setTotalNumOfGames}
            toggleLoadingState={toggleLoadingState}
          />
        )
        : <GameDataContainer />}
    </div>
  );
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  gamesData: PropTypes.objectOf(PropTypes.object).isRequired,
  totalNumOfGames: PropTypes.number.isRequired,
  addGameData: PropTypes.func.isRequired,
  setTotalNumOfGames: PropTypes.func.isRequired,
  toggleLoadingState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
