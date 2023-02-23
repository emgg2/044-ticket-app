import React, { useContext, useState } from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;




export const CreateTicket = () => {

  useHideMenu(true);

  const { socket } = useContext( SocketContext );
  const [ticket, setTicket] = useState(null);

  const newTicket = () => {
    // no se le pasa ningun argumento , el callback se va disparar con el ticket, se le pasa por argumento al socket
    socket.emit ('get_new_ticket', null, ( ticket ) => {
      setTicket(ticket);
    });
  
   
  }


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
        {
            ticket && (
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
                    { ticket.number }
                  </Text>
                  <br />           
                </Col>
              </Row>       
            )
        }

       
      </>
  )
}
