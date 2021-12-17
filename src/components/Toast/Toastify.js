import { useEffect, useState } from 'react';

function Toastify({ toast, dispatch }) {
    const [exit, setExit] = useState(false);
    const [width, setWidth] = useState(0);
    const [intervalID, setIntervalID] = useState(null);

    useEffect(() => {
        if (width === 100) {
            handleCloseNotification()
        }
        // eslint-disable-next-line
    }, [width])

    useEffect(() => {
        handleStartTimer()
    }, [])

    const handleStartTimer = () => {
        const id = setInterval(() => {
            setWidth(prev => {
                if (prev < 100) return prev + 0.5;

                clearInterval(id);
                return prev;
            })
        }, 20)

        setIntervalID(id)
    }

    const handlePauseTimer = () => {
        clearInterval(intervalID)
    }

    const handleCloseNotification = () => {
        handlePauseTimer()
        setExit(true)
        setTimeout(() => {
            dispatch({ type: "REMOVE", payload: toast.id })
        }, 400)
    }

    return (
        <div
            onMouseEnter={handlePauseTimer}
            onMouseLeave={handleStartTimer}
            className={`toastify-item ${toast.type === "success" ? "success" : "error"} ${exit ? "exit" : ""}`}
        >
            <div>{toast.msg}</div>
            <div className={"bar"} style={{ width: `${width}%` }}></div>
        </div>
    )
}

export default Toastify