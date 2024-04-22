import HookUseEffect from './HookUseEffect';
import HookUseState from './HookUseState';
import HookUseReducer from './HookUseReducer';
import HookUseRef from './HookUseRef'
import HookUseLayoutEffect from './HookuseLayoutEffect'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: 'rebeccapurple' }}>Домашнє завдання до модуля 40</h1>
      <HookUseEffect />
      <HookUseState />
      <HookUseReducer />
      <HookUseRef />
      <HookUseLayoutEffect />
    </div>
  );
}

export default App;
