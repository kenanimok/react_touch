import React from "react";
import styled from "styled-components";




export default function index({children}){

     return <Container>{children}</Container>
}

const Container = styled.section`
width:100%;
height:100vh;
background-color: #fefbd8;
display:flex;
justify-content: center;
align-items:center;
min-width:1200px;
`;

