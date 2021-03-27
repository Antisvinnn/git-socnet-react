import 'antd/dist/antd.css';
import './index.css';
import state from './redux/state.js';
import { rerenderEntireTree } from './render';

rerenderEntireTree(state);
