import React from 'react';
import { Container } from 'components';
import { Button } from '@material-ui/core';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <Container>
        <div className='footer-container'>
          <div className="text-tiny">
            VOR®&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;© 2020 VOR Community
          </div>
          <div>
            <Button className='btn-text' href='#' >Privacy Policy</Button>
            <Button className='btn-text' href='#' >Terms of Service</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer;
