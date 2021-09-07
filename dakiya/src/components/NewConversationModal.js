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

        createConversation(selectedContactIds)
        closeModal()
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


// function clearArray(data) {
//     let i = 0
//     while (i < data.length) {
//         let el = data[i]
//         let j = 0
//         while (j < data.length) {
//             let sort_el = data[j]
//             if (el == sort_el && j > i) {
//                 data.splice(j, 1)
//             } else {
//                 j++
//             }
//         }
//         i++
//     }
//     return data
// }

// function finalSelectedIds(data) {
//     const intialData = data
//     const finalData = clearArray(data)

//     let finalList = []

//     let i = 0
//     while (i <= finalData.length) {
//         let checkElement = finalData[i]

//         let j = 0
//         let k = 0
//         while (j <= intialData) {
//             let element = intialData[j]

//             if (checkElement == element) {
//                 k ++
//                 j++
//                 continue
//             } else {
//                 j++
//                 continue
//             }
//         }
//         if (k%2!==0){
//             finalList.push(checkElement)
//         }
//         i++
//     }

//     return finalList
// }