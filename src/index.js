import React from 'react';
import ReactDom from 'react-dom';

// Create a new component. This component should produce some html

const App = function() {
  return (
    <div>
    Hi Sasankh!
    </div>
  );
}


// Take this component generated HTML and put it on the page(in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
