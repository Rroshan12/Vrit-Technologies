import React, { useState } from 'react'
import DataTable from '../shared/component/DataTable'
import PageHeader from '../shared/component/PageHeader/PageHeader';
import Wrapper from '../shared/component/Wrapper';
import { Switch } from 'antd';




const initialData = [];
for (let i = 0; i < 46; i++) {
  initialData.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    status:false

  });
}


function Dashboard() {
const[data, setData] = useState(initialData);


function toggleSwitch(checked, record)
{
console.log(record,'record');

  const newRecord = data.map((item)=>
    item.key === record.key ? {...item, status: checked }: item
 
  )
  setData(newRecord);

}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render:(check,record)=>( <Switch checked={record.status}  onChange={(checked)=>toggleSwitch(checked,record)} />
    )
  },
];


  return (
    <>
    <br/>
<PageHeader pageHeader='Dashboard' pageDesc='List of all dashboard'/>
<br/>


<Wrapper>

  
<DataTable columns={columns} data={data} />

</Wrapper>


  
    </>
  )
}

export default Dashboard