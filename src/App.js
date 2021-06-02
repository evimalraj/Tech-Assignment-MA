import React from 'react';
import Container from 'react-bootstrap/Container';
import Navigations from './components/Navigations';
import StepLists from './components/StepLists'
import Icon from './components/Icon'
import {  
  Row,
  Col,
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
  
export default function App() {
  return (
    <div>
      <Navigations/>
      <Container className='main-container'>
        <Row className="g-0">
          <Col xs={6} className="main-content">
            <StepLists 
              src="../assets/content/main-section" 
              head01="Getting Started" 
              head02="Moodagent on mobile:"/>
          </Col>
          <Col xs={6}>
            <Icon src="/images/device_image/Moodagent@2x.png" rel="rightbanner banner-bg"/>
          </Col>
        </Row>
        <Row className="g-0">          
          <Col xs={6}>
            <Icon src="/images/device_image/Desktop-player.png" rel="leftbanner banner-bg"/>
          </Col>
          <Col xs={6} className="main-content">
            <StepLists 
              src="../assets/content/main-section" 
              head01="" 
              head02="Moodagent on Desktop:"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}