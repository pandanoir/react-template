import {createStore} from 'redux';

const initialState = {count: 0};
const counter = (state = initialState, action) => {
    // return {...state, count: state.count+1}のように書くことで
    // stateに変更を加えず、特定のプロパティのみ変更されたstateを
    // 返すことができる
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1};
        case 'DECREMENT':
            return {...state, count: state.count - 1};
        default:
            return state;
    }
};

const store = createStore(counter);
export default store;
