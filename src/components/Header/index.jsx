import { Space } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            setAuth(true)
            setUser(user)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("user")
        setAuth(false)
        navigate("/")
    }
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-pri navbar-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">Todo App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link active">Contact</Link>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <Space>
                                {!auth
                                    ? <>
                                        <Link to="/auth/register" className="btn btn-success">Register</Link>
                                        <Link to="/auth/login" className="btn btn-danger">Login</Link></>
                                    : <>
                                    <Paragraph className='text-white mb-0'><span className='text-info'>Wellcome!</span> {user.fullName}</Paragraph>
                                        <Link to="/dashboard" className="btn btn-info">Dashboard</Link>
                                        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                                    </>}
                            </Space>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header