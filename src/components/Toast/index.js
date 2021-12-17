import { useContext, useState } from 'react'
import { ToastifyContext } from '../../state/Toastify/ToastifyContextProvider'

function Toast() {
    const { add } = useContext(ToastifyContext)
    const [msg, setMsg] = useState("")

    const addMsg = type => {
        if (!msg) return;
        add(msg, type)
    }

    return (
        <div className="df p-16 toast-app">
            <h1>Toast</h1>

            <input
                type="text"
                value={msg}
                onChange={e => setMsg(e.target.value)}
            />

            <button onClick={() => addMsg("success")}>Add as Success</button>
            <button onClick={() => addMsg("error")}>Add as Error</button>
        </div>
    )
}

export default Toast