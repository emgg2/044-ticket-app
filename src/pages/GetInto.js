import React, { useState } from 'react';
import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUserStorage } from '../helpers/getUserStorage';

const { Title, Text } = Typography;


export const GetInto = () => {

  let navigate = useNavigate ();
  const [ user ] = useState( getUserStorage() );


  useHideMenu ( false );


  const onFinish = ({ agent, desk }) => {   
    localStorage.setItem('agent', agent );
    localStorage.setItem('desk', desk );
    navigate('/desk');
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if ( user.agent && user.desk )  navigate('/desk');


  return (
    <>
      <Title level={2}> Get into </Title>
      <Text> Set your name and desk number </Text>
      <Divider />

    
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
          <Form.Item
            label="Agent name"
            name="agent"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Desk"
            name="desk"
            rules={[{ required: true, message: 'Please input your desk number!' }]}
          >
            <InputNumber min={1} max={99} />
          </Form.Item> 

        <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
          <Button 
            type="primary" 
            htmlType="submit"
            shape='round'
          >
            
            <SaveOutlined />
            Get Into
          </Button>
        </Form.Item>
    </Form>
  </>
  )
}
