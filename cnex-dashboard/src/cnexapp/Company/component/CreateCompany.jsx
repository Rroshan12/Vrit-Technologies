import { Button, Form, Input, message } from 'antd'
import axios from 'axios';
import React, { useContext } from 'react'
import { Config } from '../../../shared/utils/Config';
import { AppContext } from '../../../shared/context/AppContext';

function CreateCompany({loading, setLoading}) {

  const {openMessage} = useContext(AppContext);

    const onFinish = (values) => {
        console.log('Success:', values);

        let companyobj = {
            category_id: "6666d2f9a07aa8a9f89098b3",
            title:values.title,
            image:values.image,
            status: false,
            createdAt: "2024-06-06T15:23:29.386Z",
            updatedAt: "2024-06-26T11:34:45.569Z",
        }

        axios.post(Config.API_ENDPOINT+'/company',
            companyobj,
            {
            headers:{
              Authorization: `Bearer ${Config.BEARER_TOKEN}`
            },
          }).then((res)=>{
            setLoading(!loading)
            openMessage('success','Company Added Successfully!')
          })




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

export default CreateCompany