import React from 'react';
import { Button } from '@material-ui/core';
import { Container } from 'components';
import LogoImage from 'assets/img/logo.png';

interface StateFromProps {
}
interface DispatchFromProps {
}
type Props = StateFromProps & DispatchFromProps ;

const Header: React.FC<Props> = () => {
  return (
    <div className='header'>
      <Container>
        <div className='center-h mt-50 mb-50'>
          <img src={LogoImage} alt='Logo' />
        </div>
        <div className='text-title mb-10'>
          Blockchain Powered Random Number Generator
        </div>
        <div className='text-small text-center'>
          VOR operates on the Ropsten Test Network.<br/>
          You are required to hold Ropsten ETH to pay gas + 1 Ropsten VOR to pay for the request.
        </div>
        <div className='center-h mt-50'>
          <Button className='btn-round' href='https://docs.vor.live'>
            Getting Started
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default Header;
