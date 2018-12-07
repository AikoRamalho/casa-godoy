import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleAppBar from './Appbar'
import * as V from 'victory';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
var generaldata = require('./backend/tst.json')


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      waterData:[

      ],
      savingData:[

      ],
      waterNow: 0,
    }
  }

  componentDidMount(){
    var waterList = []
    var savingList =[]
    console.log(generaldata.agua[0])
    for(var i=0; i<generaldata.agua.length; i++){
      waterList.push(generaldata.agua[i])
      savingList.push(generaldata.dinheiro[i])
    }
    this.setState({waterData: waterList})
    this.setState({savingData: savingList})
    this.setState({waterNow: generaldata.atual})
  }

  render() {
    return (
      <div className='wp'>
        <div className="wrapper">
          <header className="header">
            <SimpleAppBar/>
          </header>
          <article className="main">
            <p>Esses são os gráficos relativos ao consumo e ao dinheiro economizado, respectivamente.</p>  
            <div className="container">
              <div className="item1">
              Consumo Acumulado (Em mil litros/dia):
                <VictoryChart theme={VictoryTheme.material}>
                  <VictoryLine data={this.state.waterData}/>
                </VictoryChart>
              </div>
              <div className="item2">
              Economia Acumulada (Em reais/dia):
                <VictoryChart theme={VictoryTheme.material}>
                  <VictoryLine data={this.state.savingData}/>
                </VictoryChart>            
              </div>
            </div>
          </article>
          <footer className="footer" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Paper style={{height: '6vh', width: '35vh', alignSelf: 'center', backgroundColor: '#4EB1BA'}}>
              <Typography  variant="h6" style={{color: '#E9E9E9'}}>
                Quantidade de água disponível: {this.state.waterNow}L
              </Typography>
            </Paper>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
