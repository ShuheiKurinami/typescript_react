import React, { createContext } from "react";

// useReducer, useState, ChangeEvent,
import logo from "./logo.svg";
import Child from "./components/Child";
//import "./App.css";

// 8月16日のタスク
// const App: React.FC = () => {
//   const [state, setState] = useState<number>(0);
//   const [rstate, dispatch] = useReducer((prev: number, action: string) => {
//     switch (action) {
//       case "+":
//         return prev + 1;
//       case "-":
//         return prev - 1;
//       default:
//         throw new Error("不明なactionです。");
//     }
//   }, 0);

//   const countUp = () => {
//     setState((prev) => prev + 1);
//   };
//   const rcountUp = () => {
//     dispatch("+");
//   };

//   const rcountDown = () => {
//     dispatch("-");
//   };

// ８月17日練習問題タスク
// const CALC_OPTIONS = ["add", "minus", "divide", "multiply"] as const;

// type CalcOption = (typeof CALC_OPTIONS)[number];

// interface State {
//   a: number;
//   b: number;
//   result: number;
//   type?: CalcOption;
// }

// type Action =
//   | { type: "change"; payload: { name: keyof State; value: string } }
//   | { type: CalcOption };

// const reducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case "change": {
//       const { name, value } = action.payload;
//       return { ...state, [name]: parseFloat(value) }; // inputのvalueは文字列なので数値に変換
//     }
//     case "add": {
//       return { ...state, result: state.a + state.b };
//     }
//     case "minus": {
//       return { ...state, result: state.a - state.b };
//     }
//     case "divide": {
//       return { ...state, result: state.a / state.b };
//     }
//     case "multiply": {
//       return { ...state, result: state.a * state.b };
//     }
//     default:
//       throw new Error("operator is invalid");
//   }
// };

// const App: React.FC = () => {
//   const initState: State = {
//     a: 1,
//     b: 2,
//     result: 3,
//   };

//   const [state, dispatch] = useReducer(reducer, initState);

//   const calculate = (e: ChangeEvent<HTMLSelectElement>) => {
//     dispatch({ type: e.target.value as CalcOption });
//   };

//   const numChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     dispatch({
//       type: "change",
//       payload: { name: e.target.name as keyof State, value: e.target.value },
//     });
//   };

//return (

// <div className="App">
//   <header className="App-header">
//     {/* <img src={logo} className="App-logo" alt="logo" /> */}
//     <p>
//       Edit <code>src/App.tsx</code> and save to reload.
//     </p>
//     {/* <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a> */}
//   </header>
// </div>

// 8月16日
// <>
//   <div>
//     <h3>{state}</h3>
//     <button onClick={countUp}>+</button>
//   </div>
//   <div>
//     <h3>{rstate}</h3>
//     <button onClick={rcountUp}>+</button>
//     <button onClick={rcountDown}>-</button>
//   </div>
// </>

// ８月17日練習問題タスク
// <>
//   {/* <h3>練習問題</h3>
//   <p>useReducerを使って完成コードと同じ機能を作成してください。</p> */}
//   <div>
//     a:
//     <input
//       type="number"
//       name="a"
//       value={state.a}
//       onChange={numChangeHandler}
//     />
//   </div>
//   <div>
//     b:
//     <input
//       type="number"
//       name="b"
//       value={state.b}
//       onChange={numChangeHandler}
//     />
//   </div>
//   <select value={state.type} onChange={calculate}>
//     {CALC_OPTIONS.map((type) => {
//       return (
//         <option key={type} value={type}>
//           {type}
//         </option>
//       );
//     })}
//   </select>
//   <h1>結果：{state.result}</h1>
// </>

export const MyContext = createContext<string>("hello");

const App = () => {
  const value = "hello";
  return <Child />;
};

export default App;
