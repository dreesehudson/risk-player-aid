import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faDice } from '@fortawesome/free-solid-svg-icons'
import { Card, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import { faFortAwesomeAlt } from '@fortawesome/free-brands-svg-icons'
import { territories } from '../utilities/territories'

function Recruitment(props) {
    return (
        <>
            <Card body>
                {/* Recruit Panel */}
                <CardTitle tag="h5">Recruitment</CardTitle>
                <ListGroup class="list-group list-group-flush">
                    <ListGroupItem class="list-group-item">Cras justo odio</ListGroupItem>
                    <ListGroupItem class="list-group-item">Cras justo odio</ListGroupItem>
                    <ListGroupItem class="list-group-item">Cras justo odio</ListGroupItem>
                    <ListGroupItem class="list-group-item">Cras justo odio</ListGroupItem>
                    <ListGroupItem class="list-group-item">Cras justo odio</ListGroupItem>
                    <ListGroupItem class="list-group-item">Cras justo odio</ListGroupItem>

                </ListGroup>
            </Card>
        </>
    )
}

export default Recruitment