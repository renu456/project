import React from 'react';
import './Main.css'

import {Layout} from 'antd'

const { Content } = Layout;
function Main() {
  return (
    <Content style={{ margin: "75px 20px 0 " }}>
          <div style={{ background: "white", minHeight: 500 }}> 
           <div className="container">  <p>UserName:</p> 
              <p>Password:</p> </div> 
           </div> 
        </Content>

  );
}

export default Main;