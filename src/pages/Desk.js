import React, { useState, useEffect, useContext } from 'react'
import { Button, Divider, Row, Col, Typography } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUserStorage } from '../helpers/getUserStorage';
import { useNavigate } from 'react-router-dom';
import { deleteUserStorage } from '../helpers/deleteUserStorage';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;

export const Desk = () => {

  const [ user ] = useState( getUserStorage() );
  const { socket } = useContext( SocketContext);
  const [ticket, setTicket] = useState(null);

  let navigate = useNavigate ();  
  let replace = useNavigate()
  useHideMenu(false);

  const exit = () => {
     deleteUserStorage();     
     navigate('/getInto');  
  }

  const getNextTicket = () => {
      socket.emit ('set-ticket-to-user', user, ( ticket ) => {
        setTicket( ticket );
      }); 
  }


  useEffect(() => {
    if ( !user.agent || !user.desk ) {
      replace('/getInto');
    }
  }, [ replace, user.agent, user.desk ])

  const tellMeNextTicket = () => {
    return ( 
        <Row>
            <Col>
              <Text> is attending ticket number: </Text>
              <Text 
                style={{ fontSize: 33 }}
                type="danger"
              >
                { ticket.number }
              </Text>
            </Col>
          </Row>
      )

    }
  const noMoreTicketAvailable = () => {  
       return (
        <Row>
            <Col>
              <Text 
                style={{ 
                  fontSize: 25, 
                  fontWeight: 'bold' 
                }}
              >
               There are not tickets </Text>             
            </Col>
          </Row>
      )
  }


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

    {  
      ticket  ? tellMeNextTicket ()
              : noMoreTicketAvailable ()        

    }
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
