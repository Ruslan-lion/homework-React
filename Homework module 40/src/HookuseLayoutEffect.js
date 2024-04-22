import React, { useLayoutEffect, useState } from 'react';
import HWComponents from './HWComponents'
import taskHW from './HW';


const HookUseLayoutEffect = () => {
  const [added, setAdded] = useState(false);

  useLayoutEffect(() => {
    if (added) {
      const paragraph = document.createElement('p');
      paragraph.textContent = 'Новий абзац додано за допомогою useLayoutEffect!';
      document.body.appendChild(paragraph);

      return () => {
        document.body.removeChild(paragraph);
      };
    }
  }, [added]);

  const handlerClick = () => {
    setAdded(true);
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
      <HWComponents {...taskHW[4]} />
      <button style={styles.btn} onClick={handlerClick}>Додати абзац</button>
    </div>
  );
};

export default HookUseLayoutEffect;