import React from 'react'
import { Button, Divider, Row, Col, Typography } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export const Desk = () => {

  const exit = () => {
    console.log("saliendo");
  }

  const getNextTicket = () => {
    console.log("getting new ticket");
  }


  return (
    <>
      <Title level={2}> Desk </Title>     
      <Divider />

      <Row>
        <Col span={20}>
          <Title level={2}> Eva </Title>
          <Text>You are working on desk</Text>
          <Text type='success'> 5 </Text>

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
