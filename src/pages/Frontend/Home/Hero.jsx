import { Col, Row, Typography } from 'antd'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="container">
        <Row>
            <Col span={24} className='text-center py-5'>
            <Typography.Title>Home</Typography.Title>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Hero