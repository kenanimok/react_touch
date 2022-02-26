import React from "react";
import styled from "styled-components";
import{Button,Checkbox,Form,Input} from 'antd';

export default function index(){
     return(
         
        <LoginContainer>
           <TitleLogin>Login</TitleLogin>
           <Form layout="vertical">
              <Form.Item
              style={{textAlign:'left'}}
               label="Email:" 
               name="email" rules={[
                {
                required:true,
                message:"please input your email"
              },
              {
                type:"email"
              }
              ]} >
                <CustomLogin placeholder="Email"/>
              </Form.Item>
           </Form>
        </LoginContainer>
         
     );
}

const CustomLogin = styled(Input) `
 height:45px;
 border-radius: 20px;
 background:#DCDCDC;
 border:none;;

`

const TitleLogin = styled.span`
font-weigth: bold;
font-size: 36px;
color:#383737



`

const LoginContainer = styled.section`
background-color: white;
  width: 600px;
  height: 600px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius:  20px;
  text-align:center;


`