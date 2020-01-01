/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// // import from child components...
// import TotalsDisplay from '../components/TotalsDisplay.jsx';
// import MarketsContainer from './MarketsContainer.jsx';

// // mapStateToProps will take the entire redux store state as its argument
// // technically it's the "state value", not the "store instance", but for now we will call it store for clarity
// const mapStateToProps = store => ({
//   //within mapStateToProps we will return an object that contains all of the data for our component
//   // Each key in the object will become a prop for your actual component
//   // The values in the key will be used to determine if your component needs to re-render
//   totalCards: store.markets.totalCards,
//   totalMarkets: store.markets.totalMarkets
// });

// class MainContainer extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="outerBox">
//           <h1 id="header">MegaMarket Loyalty Cards</h1>
//           {/* now we can pass our totalCards and totalMarkets props that we defined above */}
//           <TotalsDisplay totalCards={this.props.totalCards} totalMarkets={this.props.totalMarkets} />
//           <MarketsContainer />
//         </div>
//       </div>
//     )
//   }

// }

// // connect will always require two arguments
// // but since we are not access mapDispatchToProps we pass null as a second value
// export default connect(mapStateToProps, null)(MainContainer);

