import React from 'react';
import ReactDOM from 'react-dom';

//import { HooksApp } from './HooksApp';
//import { CounterApp } from './components/useState/CounterApp';
//import { CounterWithCustomHook } from './components/useState/CounterWithCustomHook';
//import { SimpleForm } from './components/useEffect/SimpleForm';
//import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks';
//import { FocusScreen } from './components/useRef/FocusScreen';
//import { RealExampleRef } from './components/useRef/RealExampleRef';
//import { LayoutEffect } from './components/useLayoutEffect/LayoutEffect';
//import { Memorize } from './components/memos/Memorize';
//import { MemoHook } from './components/memos/MemoHook';
//import { CallbackHook } from './components/memos/CallbackHook';
//import { Dad } from './components/homework-memo/Dad';
import { TodoApp } from './components/useReducer/TodoApp';

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);

//import './components/useReducer/introReducer';
