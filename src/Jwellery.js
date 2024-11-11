import { useEffect, useState } from "react"
import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
function Jwellery()
{   
    const [apidata,setData]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/category/jewelery").then((result)=>{
           // console.log(result)

           result.json().then((data)=>{
            setData(data)
           // console.log(data)
           })
        })
    },[])
     return(
        <div>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{margin:"10px"}}>
          {
            apidata.map((item)=>
                <MDBCol>
            <MDBCard>
             <center>
             <MDBCardImage
                 style={{width:"200px",height:"200px"}}
                src={item.image}
                alt='...'
                position='top'
              />
             </center>
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardTitle style={{color:"blue"}}>{item.category}</MDBCardTitle>
                <MDBCardTitle style={{color:"red"}}>{item.price*80}Rs</MDBCardTitle>
                <MDBCardText>
                 {item.description}
                </MDBCardText>
                <MDBBtn>Buy Now</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>)
          }
    </MDBRow>
        </div>
     )
}
export default Jwellery
