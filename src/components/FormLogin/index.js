import React from "react";
import styled from "styled-components";
import{Button,Checkbox,Form,Input,message} from 'antd';

export default function index(){

    const handleSubmit = (values)=>{

      message.loading({content:"Loading.....",key:'login-msg'})


      setTimeout(() => {
        if(values.email === "admin@email.com"&& values.password === "admin1234"){
          message.success({content:"Login Success",key:'login-msg'})
        }else{
          message.error({content:"Login Fail",key:'login-msg'})
        }
      }, 1500);

      
    }

     return(
         
        <LoginContainer>
           <TitleLogin>Login</TitleLogin>
           <Form layout="vertical" onFinish={handleSubmit}>
              <Form.Item
              style={{textAlign:'left'}}
               label="Email:" 
               name="email" rules={[
                {
                required:true,
                message:"please input your email"
              },
              {
                type:"email",
                message:"please input your email"
              }
              ]} >
                <CustomLogin placeholder="Email"/>
              </Form.Item>

              <Form.Item
              style={{textAlign:'left'}}
               label="Password:" 
               name="password" rules={[
                {
                required:true,
                message:"please input your password"
              }
              ]} >
                <CustomLogin placeholder="Password"/>
              </Form.Item>

              <Form.Item
              style={{textAlign:'left'}}
               name="remember"  >
               <Checkbox defaultChecked={true}>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <CustomButton type="primary" htmlType="submit">Login</CustomButton>
              </Form.Item>

           </Form>
        </LoginContainer>
         
     );
}

const CustomButton = styled(Button)`
width:260px;
height:52px;
border-radius:20px;
font-weigth:bold;
font-size:18px;
color:#fffff;
`

const CustomLogin = styled(Input) `
 height:45px;
 border-radius: 20px;
 background:#DCDCDC;
 border:none;

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
  padding:120px 70px ;


`