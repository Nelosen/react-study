import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';

require('./common.pcss')

ReactDOM.render(<Provider>
    <App/>
</Provider>, document.getElementById('app'));
