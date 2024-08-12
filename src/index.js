import React from 'react';
import ReactDOM from 'react-dom';

import 'react-piano/dist/styles.css';

import './styles.css';
import { SwitchDarkMode } from './components/SwichDarkMode/index.jsx';
import { ResponsivePiano} from './components/ResponsivePiano';



function App() {
  return (
    <div>
        <SwitchDarkMode />
        <ResponsivePiano />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
