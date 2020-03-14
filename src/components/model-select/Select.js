import React, {Component} from 'react'
import {Select} from 'semantic-ui-react'

class ModelSelect extends Component {
    
    render(){
        const {selectModel,allModels} = this.props
        return(
            <div>
                <Select placeholder='Select' options = {allModels.map((model,index) =>({
                                                                        key: model.key,
                                                                        value: model.displayName,
                                                                        text: model.displayName      
                                                                    }))
                                                                    } 
                                                            onChange={selectModel} />
            </div>
            
        )
    }
}
    


export default ModelSelect


