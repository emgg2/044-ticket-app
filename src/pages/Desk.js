import React, { useState, useEffect } from 'react'
import { Button, Divider, Row, Col, Typography } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUserStorage } from '../helpers/getUserStorage';
import { useNavigate } from 'react-router-dom';
import { deleteUserStorage } from '../helpers/deleteUserStorage';

const { Title, Text } = Typography;

export const Desk = () => {

  const [ user ] = useState( getUserStorage() );

  let navigate = useNavigate ();  
  let replace = useNavigate()
  useHideMenu(false);

  const exit = () => {
     deleteUserStorage();     
     navigate('/getInto');  
  }

  const getNextTicket = () => {
    console.log("getting new ticket");
  }


  useEffect(() => {
    if ( !user.agent || !user.desk ) {
      console.log(" no hay usuario");
      replace('/getInto');
    }
  }, [ replace, user.agent, user.desk ])


  return (
    <>
      <Title level={2}> Desk </Title>     
      <Divider />

      <Row>
        <Col span={20}>
          <Title level={2}> { user.agent } </Title>
          <Text>You are working on desk: </Text>
          <Text type='success'> { user.desk } </Text>

        </Col>
        <Col 
          span={4} 
          offset={18} 
          align='right'
        >

          <Button
            shape='round'
            type='primary'
            onClick={ exit }
            danger 
          >
            <CloseCircleOutlined />
            Exit
          </Button>

        </Col>
      </Row>
      
      <Divider />

      <Row>
        <Col>
          <Text> is attending ticket number: </Text>
          <Text 
            style={{ fontSize: 33 }}
            type="danger"
          >
            55
          </Text>
        </Col>
      </Row>

       <Row>
        <Col 
          offset={18}
          span={4}
          align='right'          
        >
            <Button
              onClick={ getNextTicket }
              shape="round"
              type="primary"

            >
              <RightOutlined />

              Next Ticket
            </Button>
        </Col>    

        
      </Row> 


    </>
  )
}
