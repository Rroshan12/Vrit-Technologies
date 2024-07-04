import { Button, Form, Input, message } from 'antd'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Config } from '../../../shared/utils/Config';
import { AppContext } from '../../../shared/context/AppContext';

function UpdateCompany({loading, setLoading, record}) {
  const {openMessage} = useContext(AppContext);
  const[form] = Form.useForm();
  console.log('re', record);
    const onFinish = (values) => {

      const updateValue ={
        category_id: record?.category_id,
        title: values.title,
        image: values.image,
        status: record.status,
        createdAt: record.createdAt,
        updatedAt:  record.updatedAt
      }

      axios.put(Config.API_ENDPOINT+`/company/${record._id}`,
        updateValue,
        {
        headers:{
          Authorization: `Bearer ${Config.BEARER_TOKEN}`
        },
      }).then((res)=>{
        setLoading(!loading)
        openMessage('success','Company Updated Successfully!')
      })



      };

      useEffect(() => {
        if (record === null) {
          form.resetFields();
        } else {
          form.setFieldsValue({
            ...record
          });
        }
      }, [record]);
  return (
    <Form
    name="basic"
    form={form}
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={record}
    onFinish={onFinish}
    autoComplete="off"
  >
    
    <Form.Item
      label="Company Name"
      name="title"
      rules={[
        {
          required: true,
          message: 'Please input your Company Name!',
        },
      ]}
    >
      <Input value={record.title} />
    </Form.Item>

    <Form.Item
      label="Image Link"
      name="image"
      rules={[
        {
          required: true,
          message: 'Please input your image address!',
        },
      ]}
    >
      <Input value={record.image} />
    </Form.Item>
    
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default UpdateCompany