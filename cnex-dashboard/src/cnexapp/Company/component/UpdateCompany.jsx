import { Button, Form, Input, message } from 'antd'
import axios from 'axios';
import React, { useContext } from 'react'
import { Config } from '../../../shared/utils/Config';
import { AppContext } from '../../../shared/context/AppContext';

function UpdateCompany({loading, setLoading, record}) {

  const {openMessage} = useContext(AppContext);


  console.log('editdatacame', record);
    const onFinish = (values) => {
        


      };

  return (
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
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
      <Input />
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
      <Input />
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