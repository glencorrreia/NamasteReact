import React from 'react';
import ReactDOM from 'react-dom/client';
// JSX (transpiled before it reaches the JS) - Parcel - Babel
  
// JSX => Babel transpiles it to React.createElement => ReactElement- JS Object => HTMLElement(render)

//JSX - HTML - like or XML- like syntax
// const jsxHeading = <h1 id="heading"> Namaste React using JSX</h1>;
// console.log(jsxHeading); //object

//React Component
const Title = () => (
    <h1 className='head' tabIndex='5'> Namaste React usign JSX</h1>
);

// React Functional Component
const HeadingComponent = () => (
    <div id='container'>
        <Title />
        {Title()}
        <h1 className='heading'> Namaste React Functional Component</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); 