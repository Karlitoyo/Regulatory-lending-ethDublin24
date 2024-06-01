import React from 'react';

const HomePage = ({ handleClick }) => {
  return (
    <header className="App-header">
      <div>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => alert('6 month Vault clicked')}>6 month Vault</span>
          <div>
            <span style={{ cursor: 'pointer' }} onClick={() => alert('Deposit clicked')}>DEPOSIT</span>
            <button onClick={() => handleClick('1')}>Button 1</button>
            <span style={{ cursor: 'pointer' }} onClick={() => alert('Borrow clicked')}>BORROW</span>
          </div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => alert('12 month Vault clicked')}>12 month Vault</span>
          <div>
            <span style={{ cursor: 'pointer' }} onClick={() => alert('Deposit clicked')}>DEPOSIT</span>
            <button onClick={() => handleClick('2')}>Button 2</button>
            <span style={{ cursor: 'pointer' }} onClick={() => alert('Borrow clicked')}>BORROW</span>
          </div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => alert('24 month Vault clicked')}>24 month Vault</span>
          <div>
            <span style={{ cursor: 'pointer' }} onClick={() => alert('Deposit clicked')}>DEPOSIT</span>
            <button onClick={() => handleClick('3')}>Button 3</button>
            <span style={{ cursor: 'pointer' }} onClick={() => alert('Borrow clicked')}>BORROW</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomePage;
