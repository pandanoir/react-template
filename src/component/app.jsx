import React from 'react';
import store from '../store.js';
import {Title, MyButton} from './component.jsx';

// メインとなるApp自体はここで書く。
// react-reduxが処理してくれるのでpropsには
// mapDispatchToPropsで接続したメソッドやstateが追加されている

export const App = (props) => (
    <div>
        <Title title="hello world"></Title>
        <MyButton onClick={props.increment}>inc</MyButton>
        <MyButton onClick={props.decrement}>dec</MyButton>
        {props.count}
    </div>
);
