import React, { Component } from 'react';
import Square from './Square';

export default class BoardPc extends Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          xIsNext: true,
          resteAjouer:[0,1,2,3,4,5,6,7,8],
        };
      }
     
      handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
          return;
        }

        const CopieResteAjouer = this.state.resteAjouer.slice();  

        squares[i] = 'X' ;
        let indexDeletei = CopieResteAjouer.indexOf(i);
        indexDeletei > -1 && CopieResteAjouer.splice(indexDeletei, 1);
        

        let k = CopieResteAjouer[Math.floor(Math.random()*CopieResteAjouer.length)];

        squares[k] = 'O';
        let indexDeleteK = CopieResteAjouer.indexOf(k);
        indexDeleteK > -1 && CopieResteAjouer.splice(indexDeleteK, 1);

        this.setState({squares: squares, xIsNext: !this.state.xIsNext, resteAjouer:CopieResteAjouer});

      }

     
      renderSquare(i) {
        return (
          <Square
            value={this.state.squares[i]}
            bttClick={() => this.handleClick(i)}
          />
        );
      }
    render() {
        console.log("resteAjouer state : ",this.state.resteAjouer);
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = winner + ' a gagné';
          
        } else {
          status = 'Prochain joueur : ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div>
              <div className="status">{status}</div>
              <div className="contBoard">
                <div className="board-row">
                  {this.renderSquare(0)}
                  {this.renderSquare(1)}
                  {this.renderSquare(2)}
                </div>
                <div className="board-row">
                  {this.renderSquare(3)}
                  {this.renderSquare(4)}
                  {this.renderSquare(5)}
                </div>
                <div className="board-row">
                  {this.renderSquare(6)}
                  {this.renderSquare(7)}
                  {this.renderSquare(8)}
                </div>
              </div>
              
            </div>
          );
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }