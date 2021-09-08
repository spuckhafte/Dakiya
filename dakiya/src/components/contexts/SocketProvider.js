import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'

const SocketContext = React.createContext()

export function useSocket() {
    return useContext(SocketContext)
}

export default function SocketProvider({ id, children }) {

    const [socket, setSocket] = useState()
    const port = process.env.port||5000
    
    useEffect(() => {
        const newSocket = io(
            `http://localhost:${port}`, 
            { query: { id } }
        )

        setSocket(newSocket)
        
        return () =>  newSocket.close()
    }, [id])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}
