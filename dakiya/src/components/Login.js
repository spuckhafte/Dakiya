import React, { useRef } from 'react'
import { Button, Container, Form, Image } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'
import logo from './logo.png'

export default function Login( { onIdSubmit }) {

    const idRef = useRef()

    function createNewId(){
        let element = document.getElementById('loginButton')
        element.innerHTML = "Creating..."
        setTimeout(() => {
            onIdSubmit(uuidV4())
        }, 2000)
    }

    return (
        <Container className="align-items-center d-flex" style={{height: '100vh'}}>
            <Form className="w-100">
                <Button onClick={createNewId} id="loginButton" variant="success" className="btn-large">"Create your New Online Address, So I can exchange Daaks"</Button>
                <img className="m-5 rounded-2" style={{ boxShadow: '3px 3px grey'} } id="logo" src={ logo } alt="Logo"/>
            </Form>
        </Container>
    )
}
