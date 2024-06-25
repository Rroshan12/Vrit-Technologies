import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Breadcrumb, Layout, Menu, theme } from 'antd';
import Logo from '../../assets/images/logo.png'
import IconFactory from '../../shared/component/icons';
const { Header, Content, Sider } = Layout;

// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1);
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,
//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });




const items2 = [
  {
    key: `1`,
    icon: <IconFactory type='basket'/>,
    label: `Products`,
    children:[ {
      key: `1-1`,
      icon: React.createElement(UserOutlined),
      label: `Add Product`,
      children:null
    }],
  },

  {
    key: `2`,
    icon: React.createElement(UserOutlined),
    label: `Orders`,
    children:null
  }




]
const Sidebar = ({children}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          justifyContent:'flex-end',
          alignItems: 'center',

        }}
      >

<div style={{display:'inline-flex', alignItems:'center', justifyContent:'space-between', gap:'5px'}}>
<Avatar style={{ backgroundColor: 'blue', verticalAlign: 'middle' }} size="large" gap={2}>P</Avatar> <strong>Roshan</strong>
</div>

     
      </Header>
      <Layout style={{zIndex:'100'}}>
        <Sider
          width={264}
          style={{
            background: colorBgContainer,
            marginTop:'-64px',
            boxShadow: `0px 2px 5px 2px #BECCFF26`

            
          }}
        >
          
      <div className="demo-logo"> <img src={Logo}/></div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
              marginTop:'40px'
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          {/* <Content
            style={{
              padding: 24,
              marginTop:80 ,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          > */}
           {children}
          {/* </Content> */}
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Sidebar;