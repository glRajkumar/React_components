import React, { useEffect, useRef, useState } from "react";
import '../../css/tab.css';

function Tab({ tabs, children, defaultIndex = 0, titleClass = "", holderClass = "" }) {
  const [current, setCurrent] = useState(defaultIndex)
  const parentRef = useRef(null)

  useEffect(() => {
    parentRef.current.children[defaultIndex].style.display = "block"
    // eslint-disable-next-line
  }, [])

  const Click = (index) => {
    if (current !== index) {
      let childs = parentRef.current.children
      childs[current].style.display = "none"
      childs[index].style.display = "block"
      setCurrent(index)
    }
  };

  return (
    <>
      <div className={`df p-8 tabs-header ${titleClass}`}>
        {
          tabs.map((tab, i) => (
            <div
              key={typeof tab === "string" ? tab : tab.key}
              onClick={() => Click(i)}
              className={`pr tab-title ${i === current ? "active" : ""}`}
            >
              <div>{typeof tab === "string" ? tab : tab.Comp}</div>
              <div className="tab-line"></div>
            </div>
          ))
        }
      </div>

      <div
        ref={parentRef}
        className={`p-8 tabs-holder ${holderClass}`}
      >
        {children}
      </div>
    </>
  );
}

export default Tab;