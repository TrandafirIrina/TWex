import React, { useState } from 'react';

const App = () => {
    const [steps, setSteps] = useState(0);

    if(steps%2===0){
      return (
      <div className="container">
        <p>Today you've taken {steps} steps!</p>
        <button onClick={()=>setSteps(steps+1)}>Click me!</button>
      </div>
      );
    }else{
      return (
        <div className="container">
          <p><em>Today you've taken {steps} steps!</em></p>
          <button onClick={()=>setSteps(steps+1)}>Click me!</button>
        </div>
        );
    }
}

export default App;
