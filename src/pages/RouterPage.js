import React  from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu} from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link  
    
  } from "react-router-dom";
import { GetInto } from './GetInto';
import { Queue } from './Queue';
import { CreateTicket } from './CreateTicket';
import { Desk } from './Desk';

const { Sider, Content } = Layout;
const colorBgContainer = 'rgba(255, 255, 255, 1)';


export const RouterPage = () => {
  return (
    <Router >
        <Layout style={{ height: '100vh' }}>
            <Sider
                collapsedWidth='0'
                breakpoint='md'
            >
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                {
                    key: '1',
                    icon: <UserOutlined />,
                    label: <Link to='/getInto'>Get into</Link>,
                },
                {
                    key: '2',
                    icon: <VideoCameraOutlined />,
                    label: <Link to='/queue'>Queue</Link>,
                },
                {
                    key: '3',
                    icon: <UploadOutlined />,
                    label: <Link to='/newTicket'>Create Ticket </Link>,
                },
                ]}
            />
            </Sider>
            <Layout className="site-layout">
    
            <Content
                style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                }}
            >

                    <Routes>
                        <Route path='/getInto' element={ <GetInto /> } />
                        <Route path='/queue' element={ <Queue /> } />
                        <Route path='/newTicket' element={ <CreateTicket /> } />
                        <Route path='/desk' element={ <Desk /> } />
                        <Route path="*" element={ <GetInto /> } />
                    </Routes>

                
            </Content>
            </Layout>
        </Layout>    
    </Router>
  )
}
