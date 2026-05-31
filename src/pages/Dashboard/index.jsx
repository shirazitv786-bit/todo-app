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
                        <Title level={3}>UID: {id}</Title>
                        <Title level={3}>Full Name: {fullName}</Title>
                        <Title level={3}>Emaill: {email}</Title>
                        <Title level={3}>Password: {password}</Title>
                        <Title level={3}>Status: {status}</Title>
                    </Col>
                </Row>
            </main>
        </>
    )
}

export default Dashboard