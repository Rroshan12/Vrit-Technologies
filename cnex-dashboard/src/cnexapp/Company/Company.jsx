import React, { useEffect, useState } from 'react'
import DataTable from '../../shared/component/DataTable'
import PageHeader from '../../shared/component/PageHeader/PageHeader';
import Wrapper from '../../shared/component/Wrapper';
import { Modal, Switch } from 'antd';
import Filter from './component/Filter';
import axios from 'axios';
import { Config } from '../../shared/utils/Config';
import { formateDate } from '../../shared/utils/dateHelper';
import CreateCompany from './component/CreateCompany';




// const initialData = [];
// for (let i = 0; i < 46; i++) {
//   initialData.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//     status:false

//   });
// }


function Company() {
const[data, setData] = useState([]);
const[cdata, setCData] = useState([]);
const[filterData, setFilterData] = useState(null);
const[loading, setLoading] = useState([false]);
const[createModal, setCreateModal] = useState(false);
 function fetchCompany()
{
  axios.get(Config.API_ENDPOINT+'/company',{
    headers:{
      Authorization: `Bearer ${Config.BEARER_TOKEN}`
    }
  }).then((res)=>{
    setData(res.data)
    setCData(res.data)
    setLoading(false)
    console.log('rex com', res)
  })


}

function toggleCreateModal()
{
setCreateModal(!createModal);
}



useEffect(()=>{
fetchCompany();
},[loading])

useEffect(()=>{
const newdata = cdata.filter((item)=> item.status===filterData?.status || item.category_id === filterData?.categoryId || (new Date(item.createdAt) >= new Date(filterData?.dates[0]) &&  new Date(item.createdAt) <= new Date(filterData?.dates[1]) ) );
setData(newdata);
},[filterData])


function toggleSwitch(checked, record)
{
  const newRecord = data.map((item)=>
    item._id === record._id ? {...item, status: checked }: item
 
  )
  setData(newRecord);

}

const columns = [
  {
    title: 'Company Name',
    dataIndex: 'title',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    render:(check,record)=>(<img src={record.image} style={{width:'30px', height:'30px'}}/>)
  },
  {
    title: 'Created Date',
    dataIndex: 'createdAt',
    render:(check,record)=>(<p>{formateDate(record.createdAt)}</p>)
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
<PageHeader pageHeader='Company' pageDesc='List of all company' handleButtonClick={toggleCreateModal}/>
<br/>


<Wrapper>

<Filter setFilterData={setFilterData}/>
<DataTable columns={columns} data={data} />

</Wrapper>

<Modal
        title="Create Company"
        centered
        open={createModal}
        footer={null}
        onCancel={toggleCreateModal}
        
      >
       <CreateCompany loading={loading} setLoading={setLoading}/>
      </Modal>

  
    </>
  )
}

export default Company