import React from 'react'
import Hero from './Components/Hero'
import { Container } from './Components/Container'
import { StepsColumn } from './Components/StepsColumn'
import { Row } from './Components/Row'
import { Col } from './Components/Col'

const App = () => {
    return (
        <Container style={{ maxHeight: '90vh' }}>
            <Row style={{ height: '100vh' }}>
                <Col>
                    <StepsColumn />
                </Col>
                <Col style={{ maxWidth: 630 }}>
                    <Hero />
                </Col>
            </Row>
        </Container>
    )
}

export default App
