import { Col, Row } from 'antd'
import Title from 'antd/es/typography/Title'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {

    const [user, setUser] = useState({})
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            setUser(user)
        }
    }, [])

    const { fullName, email, id, password, status } = user
    return (
        <>
            <main>
                <Row className='mt-5'>
                    <Col span={24} className='text-center mt-5'>
                        <Title level={3}><span className='text-primary'>UID:</span> {id}</Title>
                        <Title level={3}><span className='text-primary'>Name:</span> {fullName}</Title>
                        <Title level={3}><span className='text-primary'>Email:</span> {email}</Title>
                        <Title level={3}><span className='text-primary'>Password:</span> {password}</Title>
                        <Title level={3}><span className='text-primary'>Status:</span> <span className='text-danger'>{status}</span></Title>
                    </Col>
                </Row>
            </main>
        </>
    )
}

export default Dashboard