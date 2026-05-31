import { Col, Row } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer>
            <div className="container-fluid bg-dark py-1">
                <Row>
                    <Col span={24}>
                        <Paragraph className='text-white text-center mb-0'>&copy;{year}. All Rights Reserved.</Paragraph>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default Footer