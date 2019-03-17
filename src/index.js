import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import WelcomeMsg from './WelcomeMsg';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './containers/App';

// ReactDOM.render(< WelcomeMsg greetings= {'Hello '+'React Ninja'} />, document.getElementById('root'));

// ReactDOM.render(
//   <div>
//     < Card id = '1' name = 'John Doe' email = "john.doe@gmail.com" />
//     < Card id = '2' name = 'John Murugan' email = "john.murugan@gmail.com" />
//     < Card id = '3' name = 'John Marley' email = "john.marley@gmail.com" />
//   </div>,
//   document.getElementById("root")
// );

ReactDOM.render(
  < App />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
