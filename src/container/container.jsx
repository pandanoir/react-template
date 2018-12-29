import React from 'react';
import {connect} from 'react-redux';
import {App} from '../component/app.jsx';

// mapStateToProps は特になければこれでOK。ここ変える必要ある場面が想像ついてない
const mapStateToProps = (state) => state;

// mapDispatchToPropsでディスパッチする。
// ここは基本的にdispatch({type: ほにゃらら})しか書いてないメソッドが増えていくはず
const mapDispatchToProps = dispatch => ({
    increment() {dispatch({type: 'INCREMENT'})},
    decrement() {dispatch({type: 'DECREMENT'})},
})

// Appに接続する。ここも基本的に変える必要はない。
export default connect(mapStateToProps, mapDispatchToProps)(App);
