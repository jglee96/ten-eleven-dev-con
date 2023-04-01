import { useEffect } from 'react';

export const Component = () => {
  useEffect(() => {
    const incBtn = document.getElementById('increase');
    const decBtn = document.getElementById('decrease');
    const label = document.getElementById('number');

    if (incBtn == null || decBtn == null || label == null) return;

    incBtn.addEventListener('click', () => {
      label.innerText = (parseInt(label.innerText) + 1).toString();
    });

    decBtn.addEventListener('click', () => {
      label.innerText = (parseInt(label.innerText) - 1).toString();
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div>
        <h1 id="number">0</h1>
        <button id="increase">+</button>
        <button id="decrease">-</button>
      </div>
      <div>
        <img src="/src/assets/htmlscript.png" width="300px" alt="code" />
      </div>
    </div>
  );
};
