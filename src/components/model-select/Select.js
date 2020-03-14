import React, {Component} from 'react'
import {Select} from 'semantic-ui-react'

class ModelSelect extends Component {
    
    render(){
        const {selectCar,allModels} = this.props
        return(
            <div>
                <Select placeholder='Select' options = {allModels.map(model =>({
                                                                        key: model.key,
                                                                        value: model.displayName,
                                                                        text: model.displayName      
                                                                    }))
                                                                    } 
                                                            onChange={selectCar} />
            </div>
            
        )
    }
}
    


export default ModelSelect


