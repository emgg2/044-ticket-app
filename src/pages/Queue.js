import React, { useContext, useState, useEffect } from 'react'
import { Row, Typography, Col, List, Card, Tag, Divider } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';
import { getLastTickets } from '../helpers/getLastTickets';

const { Title, Text } = Typography;



export const Queue = () => {

  useHideMenu(true);
  const { socket } = useContext(SocketContext);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {

    socket.on( 'ticket-assined', ( ticketsListAssigned ) => {
        setTickets(ticketsListAssigned);
    })

    return () => {
        socket.off('ticket-assigned');
    }
    
  }, [socket,tickets])

  useEffect(() => {
    getLastTickets().then(
      //tickets => setTickets(tickets) Se puede poner tb asi
      setTickets
    )

  }, []); 
  

  return (
    <>
      <Title level={ 1 }>
        Attending client
      </Title>
      <Row>
        <Col
          span={ 12 }
          >
            <List
              dataSource={ tickets.slice(0,3) }
              renderItem={ item => (
                <List.Item>
                  <Card
                    style={{ width: 300, marginTop: 16}}
                    actions={[
                      <Tag color="volcano">{ item.agent } </Tag>,
                      <Tag color="magenta"> Desk: { item.desk } </Tag>
                    ]}
                  >
                    <Title> No: { item.number }</Title> 
                  </Card>
                  { item.agente }
                </List.Item>
              ) }
          />
        </Col>
        <Col
          span={ 12 }
          >
            <Divider> History </Divider>
            <List
              dataSource={ tickets.slice(3) }
              renderItem={ item =>(
                <List.Item>
                  <List.Item.Meta 
                    title={ `Ticket No. ${ item.number }` }
                    description={
                      <>
                        <Text type='secondary'> Desk:  </Text>
                        <Tag color='magenta'>{ item.desk }</Tag>
                        <Text type='secondary'> Agent: </Text>
                        <Tag color='volcano'>{ item.agent } </Tag>
                      </>
                    }
                  />
                </List.Item>
              )}
            >

            </List>
        </Col>
      </Row>
    </>
  )
}
