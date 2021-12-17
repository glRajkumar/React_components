import { createContext, useReducer } from 'react';
import Toastify from '../../components/Toast/Toastify';
import ToastifyReducer from './ToastifyReducer';
import { nanoid } from 'nanoid';

export const ToastifyContext = createContext()

const ToastifyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ToastifyReducer, [])

  const add = (msg, type) => {
    const id = nanoid()

    dispatch({
      type: "ADD",
      payload: { id, msg, type }
    })
  }

  return (
    <ToastifyContext.Provider value={{
      dispatch,
      add
    }}>
      <div className="toastify-wrapper">
        {
          state.map(toast => (
            <Toastify
              key={toast.id}
              toast={toast}
              dispatch={dispatch}
            />
          ))
        }
      </div>

      {children}
    </ToastifyContext.Provider>
  )
}

export default ToastifyContextProvider