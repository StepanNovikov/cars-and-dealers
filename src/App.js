import React, {Component} from 'react';
import './App.css';
import SelectCar from './components/select-car/CarSelect';
import ModelSelect from './components/model-select/Select';
import CarList from './components/cars-list/CarList';
import Dealers from "./json/dealers"
import CarsList from "./json/cars"

class App extends Component {

   state = {
     filter: "",
     sorted: {},
   }

  handleSelect = (event, {value}) =>{
    this.setState({
      filter: value.toLowerCase().split(" ").join("-") 
    })
    return value
  };

  handleClick = (selectValue) => {
    if(selectValue in this.state.models){
      this.setState({
        sorted: this.state.models[selectValue]
      })
    }
  }

  allModels = () => { 
    const allModels = []
    for(let i=0; i < CarsList.makes.length; i++){
        for(let j = 0; j < CarsList.makes[i].models.length; j++ ){
            allModels.push(CarsList.makes[i].models[j])
        }
    }
    return allModels
    
}
  

  render() {
    Object.assign(this.state, Dealers)
    
    return(
      <>
      <div className="filter">
        <SelectCar value={this.value}/>
        <ModelSelect allModels={this.allModels()} selectCar={this.handleSelect}/>
        <button onClick={() => {this.handleClick(this.state.filter)}} className="color-button"><i className="search icon color-search"></i></button>
      </div>
        
      <table class="ui very basic collapsing celled table table-margin">
        {
          // this.state.sorted !== {}? 
          // Object.keys(this.state.models).map((keyObj) => {
          //   return this.state.models[keyObj].countries.map((countryObj) => {
          //     return countryObj.dealers.map((details, index) => {
          //           return <CarList 
          //                       key={index}
          //                       country={countryObj.country} 
          //                       image={details.image} 
          //                       link={details.link}
          //                       displayName={details.displayName}/>
          //     })
          //   })
          // }) :
          
          typeof this.state.sorted.countries !== "undefined"? 
          this.state.sorted.countries.map(countryObj => {
            return countryObj.dealers.map((details, index) => {
              return <CarList 
                              key={index}
                              country={countryObj.country} 
                              image={details.image} 
                              link={details.link}
                              displayName={details.displayName}/>
            })
          }) :
          null
        }
        </table>
      </>
    )
  }
}

export default App
