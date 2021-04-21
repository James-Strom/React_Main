import React, { Component } from 'react';
// import Products from './Products';
// import { Button } from 'react-bootstrap';
// import Rating from './Rating';
// import JumboTronComponent from './JumboTronComponent';
import UserForm from './UserForm';
import GitHub from './GitHub';

class App extends Component {
  render() {
    const isValid = true;
    return (
      <div>
        <GitHub />
        {/* <JumboTronComponent /> */}
        {/* <UserForm />  */}
        {/* <Products /> */}
          {/* <Button variant="primary" disabled={!isValid}>Default</Button> */}
         {/* <Rating rating="1"/>
         <Rating rating="2"/>
        <Rating rating="3"/>
        <Rating rating="4"/>
        <Rating rating="5"/>  */}
      </div>
    );
  }
}
export default App;

// import React from 'react';
// import Products from './Products';

// function App() {
//   return (
//     <div className="App">
//       <Products />
//     </div>
//   );
// }
// export default App;
