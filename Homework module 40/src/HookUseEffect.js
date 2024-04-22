import React, { useState, useEffect } from 'react';
import HWComponents from './HWComponents'
import taskHW from './HW';

const HookUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Оновлення компоненту');
  });

  const inCount = () => {
    setCount(prevCount => prevCount + 1);
  };


  const styles = {
    container: {
      padding: 10,
      marginBottom: 10,
},
    btn: {
      padding: 8,
      backgroundColor: '#52B536',
      borderRadius: '8px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    par: {
      padding: 10,
      fontSize: 16,
      color: 'teal',
      fontWeight: 'bold',
    }

  }

  return (
    <div>
      <hr />
      <HWComponents {...taskHW[0]} />
      <p style={styles.par}>Count: {count}</p>
      <button style={styles.btn} onClick={inCount}>Оновити компонент</button>
    </div>
  );
};

export default HookUseEffect;
