import React from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

const { Title, Text } = Typography;

const newTicket = () => {
  console.log("newTicket");
}


export const CreateTicket = () => {
  return (
      <>
        <Row>
          <Col 
            span={14} 
            offset={6} 
            align="center"
          >
            <Title level={3}>
              Press to get a new ticket
            </Title>
            <Button
                type='primary'
                shape='round'
                icon={ <DownloadOutlined />}
                size='large'
                onClick={ newTicket }

              >

                New Ticket
            </Button>
      
          </Col>

        </Row>

        <Row style={{ marginTop: 100 }}>
          <Col
            span={ 14 }
            offset={ 6 }
            align="center"
          >
            Your number
            <br />
            <Text 
              level={ 2 }
              type='success'
              style={{ fontSize: 55}}
            >
              55
            </Text>
            <br />
            

          </Col>
        </Row>
      
      </>
  )
}
