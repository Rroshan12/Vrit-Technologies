import { Input, Select } from 'antd'
import Search from 'antd/es/transfer/search'
import React from 'react'
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

function Filter({setFilterData}) {
  return (
    <div style={{display:'flex', justifyContent:'space-between', gap:'20px', marginTop:'20px', marginRight:'20px', marginLeft:'20px'}}> 
     <div >
        Showing
     <Select
     style={{margin:'2px'}}
    placeholder="Row"
    options={[
      { value: '10', label: '10' },
      { value: '50', label: '50' },
      { value: '100', label: '100' },
    ]}
  />
  Per Page

     </div>
   
    <div style={{display:'flex', justifyContent:'flex-end', gap:'20px'}} >
    <Search placeholder='Search...'/> 
        <RangePicker onChange={((dates, dateString)=> { setFilterData({dates:dateString, status:null, categoryId:'' })})} />
     <Select
    showSearch
    placeholder="Category"
    onChange={(value)=> {
      setFilterData({categoryId:value,dates:[], status:null,})}}
    options={[
      { value: '64098d52c2b7c95cc1486b13', label: 'Beverage10' },
      { value: '666167353583c53a22c6f0d7', label: 'INGO' },
      { value: '6661676d3583c53a22c6f0da', label: 'NGO' },
      { value: '666167953583c53a22c6f0dc', label: 'MNC' },
      { value: '6661ce1d63eedf222d344b30', label: 'NC' },
    ]}
  />
  <Select
    showSearch
    placeholder="Status"
    onChange={(value)=> {
      setFilterData({status:value,dates:[], categoryId:''})}}
    options={[
      { value: true, label: 'ON' },
      { value: false, label: 'OFF' },
    ]}
  />

    </div>
   
  </div>
  )
}

export default Filter