
// export default ParentComponent;

// import React, { Component } from 'react';

// class SimpleCounter extends Component {
//   state = {
//     count: 0,
//   };
// //increment the count by 1
//   increment = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };
//   //decrement the count by 1
//   decrement = () => {
//     this.setState((prevState) => ({
//       count: prevState.count - 1,
//     }));
//   };
//   render() {
//     const { count } = this.state;
//     return (
//       <div className='main'>
//         <h1>Simple Counter</h1>
//         <p>Count: {count}</p>
//         <div className = "xyz">
//           <button onClick={this.increment}>Increment</button>
//           <button onClick={this.decrement}>decrement</button>
//       </div>
//       </div>
//     );
//   }
// }

// export default SimpleCounter;
import React, { useState } from 'react';

function Abc() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count-1);
  }
  
  

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
export default Abc;
