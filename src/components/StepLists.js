import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Row,
  Col,
} from 'react-bootstrap';




function AppList({src, head01, head02}) {

  const [content, setContent] = useState(null);

  let filePath = src;

  useEffect(() => {
    if (content == null) {
      
      import('../assets/content/main-section').then((data) => { setContent(data.default); });
    }
  });

  return (
    <div>
      <h1>{head01}</h1>
      <h2>{head02}</h2>
      {content && content.map((listItems, index) => (
        <div className="list-items" key={index}>
          <Row>
            <Col className="position-relative" xs={1}>
              <div className="vertical-center step-numbers">
                {index + 1}
              </div>
              
            </Col>
            <Col>
              <div>{listItems.txtDetails}</div>
              <div>
                {listItems.actions.map((actions, i) => (
                  <span>
                    {actions.show ? <Button>{actions.btntxt}</Button> : ''}
                  </span>
                ))}
              </div>
            </Col>
          </Row>


        </div>
      ))}
    </div>
  );
}

AppList.propTypes = {
  src: PropTypes.string,
  head01: PropTypes.string,
  head02: PropTypes.string
}

export default AppList