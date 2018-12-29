import React from 'react';

// SFCで書いたコンポーネントたち。
// フツウにReact.Component継承して作ってもいい。
// 属性として渡した値がpropsに格納されるので、
// component/app.jsxの<App/>内で渡す必要がある。

export const Title = (props) => (<h1>{props.title}</h1>);
export const MyButton = (props) => (<button onClick={props.onClick}>{props.children}</button>);
