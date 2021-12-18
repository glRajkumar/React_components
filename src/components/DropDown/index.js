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

const data4 = [
  "Title1",
  "Title2",
  {
    key: "Title3",
    Comp: "Title3",
    hasChild: true,
    childProps: {
      data: [
        ...data2,
        {
          key: "Title4",
          Comp: "Title4",
          hasChild: true,
          childProps: {
            data: [
              "Child 2-1", "Child 2-2", "Child 2-3",
              {
                key: "Child 2-4",
                Comp: <div className='df'><Arrow /> Child 2-4</div>,
                hasChild: true,
                childProps: {
                  data: ["Child 2-4-1", "Child 2-4-2", "Child 2-4-3"],
                  position: "right"
                }
              }
            ],
            position: "left"
          }
        },
        {
          key: "Title5",
          Comp: "Title5",
          hasChild: true,
          childProps: {
            data: ["Child 3-1", "Child 3-2", "Child 3-3"],
            position: "top"
          }
        }
      ],
      position: "right"
    }
  },
]

function Parent({ title }) {
  return <div className='df'><Arrow /> {title}</div>
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
            Parent="DropDown 1"
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

        <div>
          <Dropdown
            Parent={<Parent title="DropDown 3" />}
          >
            <p className='p-8'>Hi i am the first</p>
            <p className='p-8'>Hi i am the second</p>
          </Dropdown>
        </div>

        <div>
          <Dropdown
            data={data4}
            Parent="DropDown 4"
            onClick={val => console.log(val)}
          />
        </div>
      </div>
    </div>
  )
}

export default DDCont