import React, {Component} from 'react';
import './App.css';
import SelectCar from './components/select-car/CarSelect';
import ModelSelect from './components/model-select/Select';
import CarList from './components/cars-list/CarList';
import Dealers from "./json/dealers"
import CarsList from "./json/cars"

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      filterCar: "",
      filterModel:"",
      sorted: {}
    } 
    console.log(this.state)
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
    //console.log(value)
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

    if(selectedCar === "") {
      CarsList.makes.map(make => {
        make.models.map(model => {
          allModels.push(model)
        })
      })
    } else {
      CarsList.makes.map(make => {
        if(make.displayName === selectedCar) {
          make.models.map(model => {
            allModels.push(model)
          })
        }
      })
    }

    return allModels
    
}

  render() {
    //console.log(this.state)
    Object.assign(this.state, Dealers)
    // console.log(this.state)
    
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
