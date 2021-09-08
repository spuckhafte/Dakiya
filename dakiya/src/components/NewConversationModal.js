import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from './contexts/ContactsProvider'
import { useConversations } from './contexts/ConversationsProvider'

export default function NewConversationModal({ closeModal }) {

    let [selectedContactIds, setSelectedContactIds] = useState([])
    const { contacts } = useContacts()
    const { createConversation } = useConversations()

    function handleSubmit(e){
        e.preventDefault()

        if (selectedContactIds.length > 0) {
            selectedContactIds = clearArray(selectedContactIds)
            if (selectedContactIds.length > 0) {
                createConversation(selectedContactIds)
                closeModal()
            }
        }
    }

    function handleCheckboxChange(contactId) {

        setSelectedContactIds(prevSelectedContactIds => {
            if (prevSelectedContactIds.includes(contacts)) {
                return prevSelectedContactIds.filter(prevId => {
                    return contactId !== prevId
                })
            } else {
                return [...prevSelectedContactIds, contactId]
            }
        })

    }

    return (
        <>
            <Modal.Header className="bg-dark rounded-0" >Create Daak</Modal.Header>
            <Modal.Body>
                <Form className="text-black" onSubmit={handleSubmit}>
                    {contacts.map(contact => (
                        <Form.Group controlId={contact.id} key={contact.id}>
                            <Form.Check
                                type="checkbox"
                                value={selectedContactIds.includes(contact.id)}
                                label={contact.name}
                                id="checkbox"
                                onChange={() => handleCheckboxChange(contact.id)}
                            />
                        </Form.Group>
                    ))}
                    <br></br>
                    <Button type="submit">Daak</Button>
                    <Button onClick={closeModal} variant="btn-link">Cancel</Button>
                </Form>
            </Modal.Body>
        </>
    )
}


function clearArray(data) {
    let newArray = []
    data.map(r => checkOccurance(r, data)%2 !== 0 ? newArray.push(r) : newArray)
    let i = 0
    while (i < newArray.length) {
        let el = newArray[i]
        let j = 0
        while (j < newArray.length) {
            let sort_el = newArray[j]
            if (el == sort_el && j > i) {
                newArray.splice(j, 1)
            } else {
                j++
            }
        }
        i++
    }
    return newArray
}

function checkOccurance(element, array) {
    let count = 0
    array.map(r => r == element ? count++ : count)
    return count
}
