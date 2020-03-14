import React, {Component} from 'react'
import {Select} from 'semantic-ui-react'
import carsList from "../../json/cars"

class SelectCar extends Component {

    render(){
        
        const {value} = this.props
        return(
            <div>
                <Select placeholder='Select' options ={carsList.makes.map(car => ({
                                                                key: car.key,
                                                                value: car.displayName,
                                                                text: car.displayName
                                                            }))}
                                                            text={value}/>
            </div>
        )
    }
}
    


export default SelectCar


