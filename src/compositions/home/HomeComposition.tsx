import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { Container, ConnectWalletButton } from 'components';
import { RootState } from 'types';
import { selectAccount } from 'store/account/accountSelector';
import LogoImage from 'assets/img/logo.png';

interface StateFromProps {
  account: ReturnType<typeof selectAccount>;
}
interface DispatchFromProps {
}
interface OwnProps {}

type Props = StateFromProps & DispatchFromProps & OwnProps & RouteComponentProps;

export const HomeComposition = ({ account, history }: Props) => {
  return (
    <React.Fragment>
      <ConnectWalletButton />
      <Container>
        <div className='center-h mt-50 mb-50'>
          <img src={LogoImage} alt='Logo' />
        </div>
        <div className='text-title mb-10'>
          Blockchain Powered Random Number Generator
        </div>
        <div className='text-small text-center'>
          VOR operates on the Kovan Test Network.<br/>
          You are required to hold Kovan ETH to pay gas + 1 Kovan VOR to pay for the request.
        </div>
        <div className='center-h mt-50'>
          <Button className='btn-round'>
            Generate Random Number
          </Button>
        </div>
        <div className='text-small text-center mt-20'>
          How Many Digits Needed?
        </div>
        <div className='center-h mt-20'>
          <Button className='btn-rect small'>-</Button>
          <input type='text' className='input-text digits ml-10 mr-10' />
          <Button className='btn-rect small'>+</Button>
        </div>
        <div>
          <div className='center-h mt-30 mb-5'>
            <input type='text' className='input-text' />
          </div>
          <div className='text-small text-center'>Your Random Number</div>
        </div>
        <div>
          <div className='center-h mt-30 mb-5'>
            <input type='text' className='input-text' />
          </div>
          <div className='text-small text-center'>VOR Verifiable Hash</div>
        </div>
        <div>
          <div className='center-h mt-30 mb-5'>
            <input type='text' className='input-text' />
          </div>
          <div className='text-small text-center'>Paste Hash Here To Verify</div>
        </div>
        <div className='center-h mt-20 mb-5'>
          <Button className='btn-round'>
            Verify Random Number
          </Button>
        </div>
        <div className='center-h mt-50 mb-20'>
          <Button className='btn-rect mr-120'>
            DEV DOCS
          </Button>
          <Button className='btn-rect mr-120'>
            VOR TWITTER
          </Button>
          <Button className='btn-rect'>
            VOR TELEGRAM
          </Button>
        </div>
      </Container>
    </React.Fragment>
  )
}

function mapStateToProps(
  state: RootState,
): StateFromProps {
  return {
    account: selectAccount(state),
  };
}
function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(HomeComposition))
