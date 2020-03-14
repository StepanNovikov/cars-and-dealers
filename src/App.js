import React, {Component} from 'react';
import './App.css';
import SelectCar from './components/select-car/CarSelect';
import ModelSelect from './components/model-select/Select';
import CarList from './components/cars-list/CarList';
import Dealers from "./json/dealers"
import CarsList from "./json/cars"

class App extends Component {

   state = {
     filterCar: "",
     filterModel:"",
     sorted: {},
   }

  handleSelectModel = (event, {value}) =>{
    this.setState({
      filterModel: value.toLowerCase().split(" ").join("-") 
    })
    return value
  };

  handleSelectCar = (event, {value}) => {
    this.setState({
      filterCar: value
    })
    console.log(value)
    return value
  };

  handleClick = (selectValue) => {
    if(selectValue in this.state.models){
      this.setState({
        sorted: this.state.models[selectValue]
      })
    }
  }
  

  allModels = (selectedCar = "") => { 
    const allModels = []
    
    switch(true) {
      case selectedCar === "": 
        for(let i=0; i < CarsList.makes.length; i++){
          for(let j = 0; j < CarsList.makes[i].models.length; j++ ){
              allModels.push(CarsList.makes[i].models[j])
          }
        }
        break
      case selectedCar !== "":
        for(let i=0; i < CarsList.makes.length; i++){
          if(CarsList.makes[i].displayName === selectedCar) {
            for(let j = 0; j < CarsList.makes[i].models.length; j++ ){
              allModels.push(CarsList.makes[i].models[j])
          }
          }
        }
        break
    }

    return allModels
    
}
  

  render() {
    Object.assign(this.state, Dealers)
    
    return(
      <>
      <div className="filter">
        <SelectCar value={this.value} selectCar={this.handleSelectCar}/>
        <ModelSelect allModels={this.allModels(this.state.filterCar)} selectModel={this.handleSelectModel}/>
        <button onClick={() => {this.handleClick(this.state.filterModel)}} className="color-button"><i className="search icon color-search"></i></button>
      </div>
        
      <table className="ui very basic collapsing celled table table-margin">
        {
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
