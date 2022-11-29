// TODO: Add a comment giving a brief description of what React is
    //React is a program that allows us to make parts of a page seperate working components to create interacive UIs
import React from 'react';

// TODO: Add a comment that describes the difference between react and react-dom
    //The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside the React model if you need to.
import ReactDOM from 'react-dom';

import App from './App';

// TODO: Add a comment describing the significance of the ReactDOM.render method
    //it is putting all off code from App onto the index where the div has a className of root
ReactDOM.render(<App />, document.getElementById('root'));
