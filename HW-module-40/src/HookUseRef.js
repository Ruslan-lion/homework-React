import React, { useRef } from 'react'
import HWComponents from './HWComponents'
import taskHW from './HW';


const HookUseRef = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleBlur = () => {
    inputRef.current.blur();
  };

  const styles = {
    btn: {
      width: 90,
      padding: 8,
      margin: 4,
      backgroundColor: '#52B536',
      borderRadius: '8px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    input: {
      padding: 8,
      marginBottom: 4,
      borderRadius: '8px',
    }
  };

  return (
    <div>
      <hr />
      <HWComponents {...taskHW[3]} />
      <input style={styles.input} type="text" ref={inputRef} />
      <br />
      <button style={styles.btn} onClick={handleFocus}>Focus</button>
      <button style={styles.btn} onClick={handleBlur}>Blur</button>
    </div>
  );
};

export default HookUseRef;