import React from 'react';
import { ReactComponent as Cancel } from '../../svg/cancel.svg';
import { ReactComponent as Arrow } from '../../svg/arrow.svg';
import Tab from './Tab'

const tab1 = ["Title1", "Title2", "Title3"]
const tab2 = [
  { key: "Title1", Comp: <div className='df'><Arrow /> Title1</div> },
  { key: "Title2", Comp: <div className='df'>Title2 <Cancel /></div> },
  "Title3"
]

function TabCont() {
  return (
    <div className='p-16'>
      <h1>Tab</h1>

      <div className="df gap1">
        <div>
          <Tab
            tabs={tab1}
            titleClass='p-8'
            holderClass='p-8'
          >
            <h3>Title1 is selected</h3>
            <h3>Title2 is selected</h3>
            <h3>Title3 is selected</h3>
          </Tab>
        </div>

        <div>
          <Tab
            tabs={tab2}
            titleClass='p-8'
            holderClass='p-8'
            defaultIndex={1}
          >
            <h3>Title1 is selected</h3>
            <h3>Title2 is selected</h3>
            <h3>Title3 is selected</h3>
          </Tab>
        </div>
      </div>
    </div>
  )
}

export default TabCont