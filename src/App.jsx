import React, {Component} from "react";
import Smile from "./components/Smile";
import Counter from "./components/Counter";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      smiles: [
        {name: "🦖", count: 0},
        {name: "🐡", count: 0},
        {name: "🦄", count: 0},
      ],
      showWinner: false,
      winner: null,
    };
  }

  handleVote = (index) => {
    const {smiles} = this.state;
    const updateSmiles = [...smiles];
    updateSmiles[index].count++;
    this.setState({smiles: updateSmiles});
  };

  handleShowResults = () => {
    const {smiles} = this.state;
    const winner = smiles.reduce((prev, current) => 
    prev.count > current.count ? prev : current);
    this.setState({showWinner: true, winner});
  };

  render(){
    const {smiles, showWinner, winner} = this.state;
    return(
      <div>
        {smiles.map((smile, index) => (
      <div key={index}>
        <Smile
        name={smile.name}
        onClick={() => this.handleVote(index)}
        />
        <Counter count={smile.count} />
      </div>))}
      <button onClick={this.handleShowResults}>Показати результат</button>
      {showWinner && <div>Виграв: {winner.name}</div>}
      </div>
    );
  }
}

export default App;