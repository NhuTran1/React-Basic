import logo from './logo.svg';
import './App.scss';

import MyComponent from './examples/MyComponent';
import Increment from './examples/MyComponent';
import Exercise from './examples/MyComponent';
import Examples from './examples/bt1';
import Main from './note/Note_Main';
import ToDoApp from './note/Note_1';

/* 
2 component: class component (xử lí logic) -> render/ function component (function, arrow) (chỉ sinh ra HTML) -> return
3 JSX
*/


//function component
// function App(){ 
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    
      
        {/* <Exercise/> */}
        
        {/* <Increment></Increment> */}

        {/* <Examples/> */}
        {/* <Main> </Main> */}
        <ToDoApp></ToDoApp>
      </header>
    </div>
  );
}

export default App;
