import React from 'react'
import { Table } from 'semantic-ui-react'
import "./CarList.css"

const CarList = ({country, image, link, displayName}) => {
    
    return (
        <Table.Body>
            <Table.Row>
                <Table.Cell>{country}</Table.Cell>
                <Table.Cell>{displayName}</Table.Cell>
                <Table.Cell textAlign='right'><img src={image} alt="Dealers image"/></Table.Cell>
                <Table.Cell textAlign='right'><a href={link}>{link}</a></Table.Cell>
            </Table.Row>
        </Table.Body>

        
    )
}

export default CarList;