import { createContext, useReducer } from 'react';
import Toastify from '../../components/Toastify';
import ToastifyReducer from './ToastifyReducer';

export const ToastifyContext = createContext()

const ToastifyContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ToastifyReducer, [])

    return (
        <ToastifyContext.Provider value={dispatch}>
            <div className="toastify-wrapper">
                {
                    state.map(toast => {
                        return (
                            <Toastify key={toast.id} toast={toast} dispatch={dispatch} />
                        )
                    })
                }
            </div>

            {children}
        </ToastifyContext.Provider>
    )
}

export default ToastifyContextProvider