import React from 'react';
import { Container } from 'components';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <Container>
        <div className='footer-container'>
          <div className="text-tiny">
            VOR®&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;© 2020 VOR Community
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer;
