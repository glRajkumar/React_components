import React, { useEffect, useRef, useState } from "react";
import '../../css/dropdown.css';

function Dropdown({ Parent, className = "", children, data, position = "", onClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [wrapperRef])

  function handleClickOutside(e) {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      return setIsOpen(false)
    }
  }

  function handleClick() {
    return setIsOpen(prev => !prev)
  }

  return (
    <div ref={wrapperRef} className={`dc pr cp ${className}`} onClick={handleClick}>
      {Parent}

      {
        isOpen &&
        <div className={`dropdown-list ${position}`}>
          {children}

          {
            data && data.map(val => (
              <div
                key={typeof val === "string" ? val : val.key}
                className="p-8 dropdown-hv"
                onClick={() => onClick(typeof val === "string" ? val : val.key)}
              >
                {typeof val === "string" ? val : val.Comp}
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Dropdown;