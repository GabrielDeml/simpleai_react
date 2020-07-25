import React from 'react';
import './App.css';
import Board from './components/Board';
import Card from './components/Card';

function App() {
  return (
      <div className="App">
        <main className="flexbox">
          <Board id="board-1" className="Board">
            <Card id="card-1" className="Card" draggable="true">
              <p>Card one</p>
            </Card>
          </Board>
          <Board id="board-2" className="Board">
            <Card id="card-2" className="Card" draggable="true">
              <p>Card two</p>
            </Card>
          </Board>
        </main>
      </div>
  );
}

export default App;
