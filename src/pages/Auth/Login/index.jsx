import { Button, Col, Form, Input, message, Row } from 'antd'
import Password from 'antd/es/input/Password'
import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const initialState = { email: "", password: "" }

const Login = () => {

    const [state, setState] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleLogin = () => {
        let { email, password } = state

        setIsLoading(true)

        if (email === "" || password === "") {
            message.error("Please field all fields")
            setIsLoading(false)
            return
        }

        const users = JSON.parse(localStorage.getItem("users")) || []
        const user = users.find(user => user.email === email && user.password === password)
        if (!user) {
            message.error("Invalid credentials")
            setIsLoading(false)
            return
        }

        localStorage.setItem("user", JSON.stringify(user))

        setTimeout(() => {
            message.success("Login successfull")
            setIsLoading(false)

        }, 1000);

        setTimeout(() => {
            navigate("/dashboard")
        }, 2000);
    }

    return (
        <main className="auth">
            <Row>
                <div className="card p-2 ms-auto me-auto mt-5 w-25 text-center">
                    <Title level={1} className='mb-1'>Login</Title>
                    <Paragraph>Don't have an account? <Link className='text-decoration-none' to="/auth/register">Register</Link></Paragraph>
                    <Form layout='vertical'>
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
                            <Button type='primary' block className='mb-2' htmlType='submit' loading={isLoading} onClick={handleLogin}>Login</Button>
                        </Col>
                    </Form>
                </div>
            </Row>
        </main>
    )
}

export default Login