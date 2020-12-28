import React from 'react';
import { Row, Col } from 'reactstrap'
import Star from './Star'

function RedStarTracker(props) {
    return (
        <>
            <Row>
                <Col>
                    <h5>{props.player.name}</h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </Col>
            </Row>
        </>
    )

}

export default RedStarTracker