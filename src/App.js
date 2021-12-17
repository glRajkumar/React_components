import Calendar from "./components/Calender";
import Dropdown from "./components/DropDown";
import Toast from "./components/Toast";
import Modal from "./components/Modal";
import Tab from "./components/Tab";

function App() {
  return (
    <>
      <Toast />
      <Modal />
      <Tab />
      <Dropdown />
      <Calendar />
    </>
  )
}

export default App