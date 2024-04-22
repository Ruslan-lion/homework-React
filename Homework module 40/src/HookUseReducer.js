import React, {useReducer} from 'react'
import HWComponents from './HWComponents'
import taskHW from './HW';

const initials = {
  name: "",
  lastName: "",
  birthYear: "",
  displayName: "",
  displayLastName: "",
  displayBirthYear: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setLastName":
      return { ...state, lastName: action.payload };
    case "setBirthYear":
      return { ...state, birthYear: action.payload };
    case "display":
      return { ...state, [action.key]: state[action.field] };
    default:
      return state;
  }
}

const HookUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initials);

  const handlerChange = (field) => (event) => {
    dispatch({ type: `set${field}`, payload: event.target.value });
  };

  const handlerDisplay = (field, key) => {
    dispatch({ type: "display", field, key });
  };

  const styles = {
    btn: {
      width: 100,
      padding: 8,
      backgroundColor: '#52B536',
      borderRadius: '8px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    input: {
      padding: 8,
      marginRight: 4,
      borderRadius: '8px',
    }
  };

  return (
    <div>
      <hr />
      <HWComponents {...taskHW[2]} />
      <input style={styles.input} value={state.name} onChange={handlerChange("Name")} />
      <button style={styles.btn} onClick={() => handlerDisplay("name", "displayName")}>
      Імʼя
      </button>
      <p>Імʼя: {state.displayName}</p>
      <input style={styles.input} value={state.lastName} onChange={handlerChange("LastName")} />
      <button style={styles.btn} onClick={() => handlerDisplay("lastName", "displayLastName")}>
        Прізвище
      </button>
      <p>Прізвище: {state.displayLastName}</p>
      <input style={styles.input} value={state.birthYear} onChange={handlerChange("BirthYear")} />
      <button style={styles.btn} onClick={() => handlerDisplay("birthYear", "displayBirthYear")}>
      Днюха!
      </button>
      <p>Рік народження: {state.displayBirthYear}</p>
    </div>
  );
}

export default HookUseReducer;