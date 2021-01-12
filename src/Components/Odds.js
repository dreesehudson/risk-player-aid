import React, { useState } from 'react';
import { Row, Col, Label, Progress } from 'reactstrap';

const Odds = (props) => {
    const [battleSelected, setBattleSelected] = useState(true)

    return (
        <>
            <Row>
                <Col className='text-center text-success'>
                    <Label >Defender Loses 2</Label>
                </Col>
                <Col className='text-center text-warning'>
                    <Label >Both Lose 1</Label>
                </Col>
                <Col className='text-center text-danger'>
                    <Label >Attacker Loses 2</Label>
                </Col>
            </Row>
            {
                battleSelected ? 
                <Row>
                    <Col>
                        <Progress className='m-3' multi>
                            <Progress bar color="success" value="55">55%</Progress>
                            <Progress bar color="warning" value="10">10%</Progress>
                            <Progress bar color="danger" value="35">35%</Progress>
                        </Progress>
                    </Col>
                </Row>
                :
                <Row>
                    <Col>
                        <Progress className='m-3' multi>
                            <Progress bar color="success" value="0"></Progress>
                            <Progress bar color="warning" value="0"></Progress>
                            <Progress bar color="danger" value="0"></Progress>
                        </Progress>
                    </Col>
                </Row>
            }
        </>
    );
};

export default Odds;