import React from 'react'
import CustomCard from './Card';
import { getAllMemes } from '../../api/Memes';
import { useEffect, useState  } from 'react';
import { Row, Col } from 'react-bootstrap';

function Home() {
 const [data, setData]=useState([]);
  useEffect(()=>{
    getAllMemes().then((memes) => setData(memes.data.memes)); 
  }, []);
  return (
    <Row style={{ marginLeft:'15px' }}>  
    {
        data.map((el)=>
        <Col key={el.id} xs={12} sm={6} md={4} lg={3}>
          <CustomCard img={el.url} title={el.name} />
        </Col>)
      // data.map((el)=> <CustomCard img={el.url} title={el.name}/>)
    }
 
    </Row>
  );
}

export default Home;