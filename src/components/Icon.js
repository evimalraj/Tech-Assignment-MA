import React from 'react';
import PropTypes from 'prop-types';
import {  
  Image
} from 'react-bootstrap';

function Icon({ src, rel}) {

  return (
    <div className={rel}>
      <Image fluid src={src} />
    </div>
  );
}

Icon.propTypes = {
  src: PropTypes.string,
  rel: PropTypes.string,
};

export default Icon