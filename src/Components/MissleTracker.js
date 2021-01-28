import React, { useState } from 'react'
import { Row, Col, Button, Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

function MissleTracker(props) {
    const [count, setCount] = useState(0)
    return (
        <>
            <hr />
            <Row>
                <Col>
                    <FontAwesomeIcon className='mx-1 fa-lg' color='orange' icon={faRocket} />
                    <br />
                    <Button color='primary' className='btn-sm' onClick={() => setCount(count + 1)} disabled={count == 15} >+</Button>
                        <Container>
                            {count}
                        </Container>
                    <Button color='danger' className='btn-sm' onClick={() => setCount(count - 1)} disabled={count == 0} >-</Button>
                </Col>
            </Row>
        </>
    )

}

export default MissleTracker