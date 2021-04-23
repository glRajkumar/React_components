import { useContext, useState } from 'react'
import { ToastifyContext } from '../../state/Toastify/ToastifyContextProvider'
import shortid from "shortid";
import "../../css/toastify.css";

function Toast() {
    const dispatch = useContext(ToastifyContext)
    const [msg, setMsg] = useState("")

    const add = (type) => {
        const id = shortid.generate()

        dispatch({
            type: "ADD",
            payload: { id, msg, type }
        })
    }

    return (
        <div className="toast-app">
            <h1>Toast app</h1>
            <input
                type="text"
                value={msg}
                onChange={e => setMsg(e.target.value)}
            />
            <button onClick={() => add("success")}>Add as Success</button>
            <button onClick={() => add("error")}>Add as Error</button>
        </div>
    )
}

export default Toast