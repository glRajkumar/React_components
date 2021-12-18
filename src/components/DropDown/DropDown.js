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

  function onDDClick(e, val) {
    if (val.hasChild) {
      e.stopPropagation()
      return
    }
    onClick(typeof val === "string" ? val : val.key)
  }

  return (
    <div ref={wrapperRef} className={`pr cp ${className}`} onClick={handleClick}>
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
                onClick={e => onDDClick(e, val)}
              >
                {
                  typeof val === "string"
                    ? val
                    : val.hasChild
                      ? <Dropdown Parent={val.Comp} {...val.childProps} onClick={onClick} />
                      : val.Comp
                }
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Dropdown;