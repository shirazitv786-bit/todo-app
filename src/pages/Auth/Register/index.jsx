import { Button, Col, Form, Input, message, Row } from 'antd'
import Password from 'antd/es/input/Password'
import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const initialState = { fullName: "", email: "", password: "", confirmPassword: "" }

const Register = () => {

    const [state, setState] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleRegister = () => {
        let { fullName, email, password, confirmPassword } = state

        setIsLoading(true)

        const id = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
        const user = { fullName, email, password, id, status: "ACTIVE", createdAt: new Date().getTime() }

        if (fullName === "" || email === "" || password === "" || confirmPassword === "") {
            message.error("Please field all fields")
            setIsLoading(false)
            return
        }
        if (password !== confirmPassword) {
            message.error("Password does't matched")
            setIsLoading(false)
            return
        }
        if (password.length < 6) {
            message.error("password length must be 6 character")
            setIsLoading(false)
            return
        }

        const users = JSON.parse(localStorage.getItem("users")) || []

        const isUser = users.find(user => user.email === email)
        if (isUser) {
            message.error("Already exists")
            setIsLoading(false)
        }

        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))

        setTimeout(() => {
            message.success("Registered successfully")
            setIsLoading(false)

        }, 1000);

        setTimeout(() => {
            navigate("/auth/login")
        }, 2000);
    }

    return (
        <main className="auth">
            <Row>
                <div className="card p-2 ms-auto me-auto mt-5 w-25 text-center">
                    <Title level={1} className='mb-1'>Register</Title>
                    <Paragraph>Already have an account? <Link className='text-decoration-none' to="/auth/login">Login</Link></Paragraph>
                    <Form layout='vertical'>
                        <Col span={24}>
                            <Form.Item label="Full Name" required>
                                <Input type="text" size='large' placeholder='Full Name' name='fullName' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Email" required>
                                <Input type="email" size='large' placeholder='Email' name='email' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Password" required>
                                <Input.Password size='large' placeholder='Password' name='password' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Confirm Password" required>
                                <Input.Password size='large' placeholder='Confirm Password' name='confirmPassword' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Button type='primary' block className='mb-2' htmlType='submit' loading={isLoading} onClick={handleRegister}>Register</Button>
                        </Col>
                    </Form>
                </div>
            </Row>
        </main>
    )
}

export default Register