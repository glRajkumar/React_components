### Collections of React Components
without using any libraries (libraries used -> Nanoid).


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
-> Add div with id="modal-root" in index.html (used for react portal)

1. Modal 1
  * This component created with useImperativeHandle method. so we can access child method with parent ref.
  * props => ref, header

2. Modal 2
  * This component utilizing state for its function.
  * props => open, header, onClose, ?size = "mini"


## 3) Tab
-> Only suitable for static tabs. 
-> tabs array length should match with Tab children.
-> props
  * tabs (array of strings/Components)
  * ?defaultIndex = 0  
  * ?titleClass = "" 
  * ?holderClass = ""


## 4) DropDown
-> this component can work with just children or data as prop.
-> props
  * Parent (Component | string)
  * ?data (array of strings | Components)
  * ?className = ""
  * ?position = "" (right | left | top)
  * ?onClick
-> nested drop down can be done by passing following type of object

```js
{
  key: "",
  Comp: "",
  hasChild: true, // optional
  childProps: {} // optional - dropdown props
}
```


## 5) Calendar
-> Simple calendar. We can access date using onDayClick prop.

