import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';

import ButtonGroup from '@mui/material/ButtonGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        

        <Button variant="contained" color="primary" size="small"
         href="https://google.com"
         target="_blank"
         rel="noopener noreferrer"
         >Button</Button>



        <Button variant="outlined-buttons" color="primary" size="large">
         Test
        </Button>

        <ButtonGroup variant="contained" color="secondary" size="large" orientation="vertical">
       <Button
        href="https://google.com"
         target="_blank"
         rel="noopener noreferrer"
        >Google</Button>

         <Button
        href="https://youtube.com"
         target="_blank"
         rel="noopener noreferrer"
        >Youtube</Button>

         <Button
        href="https://apple.com"
         target="_blank"
         rel="noopener noreferrer"
        >Apple</Button>



      </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
