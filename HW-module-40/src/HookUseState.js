import React, { useState } from 'react'
import HWComponents from './HWComponents'
import taskHW from './HW';


const HookUseState = () => {
  const names = ['Колян', 'Вован', 'Толян', 'Шурік', 'Дімон'];
  const [randomName, setRandomName] = useState('');

  const generateRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    setRandomName(randomName);
  };

  const styles = {
    btn: {
      padding: 8,
      backgroundColor: '#52B536',
      borderRadius: '8px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  };
  return (
    <div>
      <hr />
      <HWComponents {...taskHW[1]} />
      <button style={styles.btn} onClick={generateRandomName}>Привітайся</button>
      {randomName && <p>Вітаю {randomName}!</p>}
    </div>
  );
};

export default HookUseState;