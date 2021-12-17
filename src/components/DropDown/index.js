import React from 'react';
import Dropdown from './DropDown';
import { ReactComponent as Cancel } from '../../svg/cancel.svg';
import { ReactComponent as Arrow } from '../../svg/arrow.svg';

const data1 = ["value1", "value2", "value3"]
const data2 = [
  { key: "Title1", Comp: <div className='df'><Arrow /> Title1</div> },
  { key: "Title2", Comp: <div className='df'>Title2 <Cancel /></div> },
  "Title3"
]

function Parent({ title }) {
  return <div>{title}</div>
}

function DDCont() {
  return (
    <div className='p-16'>
      <h1>Drop down</h1>

      <div className="df gap1">
        <div>
          <Dropdown
            data={data1}
            position='right'
            Parent={<Parent title="DropDown 1" />}
            onClick={val => console.log(val)}
          />
        </div>

        <div>
          <Dropdown
            data={data2}
            Parent={<Parent title="DropDown 2" />}
            onClick={val => console.log(val)}
          />
        </div>
      </div>
    </div>
  )
}

export default DDCont