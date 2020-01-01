/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

// import * as types from '../constants/actionTypes';

// const initialState = {
//   totalMarkets: 0,
//   totalCards: 0,
//   marketList: [],
//   lastMarketId: 10000,
//   newLocation: '',
// };

// const marketsReducer = (state = initialState, action) => {
//   let marketList;
//   let totalCards;

//   switch (action.type) {
//     case types.ADD_MARKET:
//       // increment lastMarketId and totalMarkets counters
//       let lastMarketId = state.lastMarketId + 1;
//       let totalMarkets = state.totalMarkets + 1;
//       // create the new market object from provided data
//       const newMarket = {
//         // requred market data determined by mockup
//         marketId: state.lastMarketId,
//         location: state.newLocation,
//         // cards and % total will both default to zero
//         cards: 0,
//         percentTotal: 0
//       };

//       // push the new market onto a copy of the market list
//       marketList = state.marketList.slice();
//       marketList.push(newMarket);

//       // return updated state
//       return {
//         // using the spread operator means we will return the entire state
//         // any new values following the state will overwrite previous state values
//         ...state,
//         marketList,
//         lastMarketId,
//         totalMarkets,
//         newLocation: '',
//       };

//     case types.SET_NEW_LOCATION:
//       //this should be triggered upon every change to our string in the input field
//       return {
//         ...state,
//         newLocation: action.payload
//       }

//     case types.ADD_CARD:
//       //first take a slice of our market so we do not directly mutate state
//       marketList = state.marketList.slice();
//       totalCards = state.totalCards;
//       //loop over our marketList and update only the market with a matching id to our payload
//       for (let i = 0; i < marketList.length; i++) {
//         if (marketList[i].marketId == action.payload) {
//           marketList[i].cards++;
//           totalCards++;
//           break;
//         }
//       }

//       return {
//         ...state,
//         marketList,
//         totalCards,
//       };

//     case types.DELETE_CARD:
//       //same logic as add card, except an extra conditional to make sure we do not decrement past 0
//       marketList = state.marketList.slice();
//       totalCards = state.totalCards;
//       for (let i = 0; i < marketList.length; i++) {
//         if (marketList[i].marketId == action.payload && marketList[i].cards > 0) {
//           marketList[i].cards--;
//           totalCards--;
//           break;
//         }
//       }
//       return {
//         ...state,
//         marketList,
//         totalCards,
//       };

//     //this is our base case, any actions that come in which do not match a defined case will simply return the unaltered state
//     default:
//       return state;
//   }
// };

// export default marketsReducer;

// THIS IS HERE JUST FOR REFERENCE FOR NOW