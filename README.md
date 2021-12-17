### Collections of React Components
without using any libraries

## 1) Toastify
-> Add ToastifyContextProvider in top of your project
-> We can add two type of toasts(Success / Failure)
-> You have to import ToastifyContext from state and the you can utilize add methode from the context.

```js
import { ToastifyContext } from '../../state/Toastify/ToastifyContextProvider'

const { add } = useContext(ToastifyContext)

add("message", "success")
```

## 2) Modal


## 3) Tab


## 4) DropDown


## 5) Calendar
