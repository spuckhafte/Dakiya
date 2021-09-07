import React, { useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useContacts } from './contexts/ContactsProvider'

export default function NewContactModal( { closeModal } ) {
    const idRef = useRef()
    const nameRef = useRef()
    const { createContact } = useContacts()

    function handleSubmit(e){
        e.preventDefault()
 
        createContact(idRef.current.value, nameRef.current.value)
        closeModal()
    }


    return (
        <>
            <Modal.Header className="bg-dark">Create Sampark</Modal.Header>
            <Modal.Body>
                <Form className="text-black" onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>ID:</Form.Label>
                        <Form.Control type='text' ref={idRef} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type='text' ref={nameRef} required />
                    </Form.Group>
                    <br></br>
                    <Button type="submit">Sampark</Button>
                    <Button onClick={closeModal} variant="btn-link">Cancel</Button>
                </Form>
            </Modal.Body>
        </>
    )
}
