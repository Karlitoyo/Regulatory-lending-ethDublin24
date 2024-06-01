import React from 'react';

const LendPage = ({ handleClick }) => {
  return (
    <header className="App-header">
      <div>
      <h1>Pick your vault you want to lend to</h1>
      {/* Add your lending content here */}
    </div>
        <div>
          <button onClick={() => handleClick('1')}>Button 1</button>
        </div>
        <div>
          <button onClick={() => handleClick('2')}>Button 2</button>
        </div>
        <div>
          <button onClick={() => handleClick('3')}>Button 3</button>
        </div>
  </header>
  );
};

export default LendPage;
