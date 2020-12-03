import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { Container, ConnectWalletButton, Footer, Header } from 'components';
import { RootState } from 'types';
import { selectAccount } from 'store/account/accountSelector';

interface StateFromProps {
  account: ReturnType<typeof selectAccount>;
}
interface DispatchFromProps {
}
interface OwnProps {}

type Props = StateFromProps & DispatchFromProps & OwnProps & RouteComponentProps;

export const RandomVerifyComposition = ({ account, history }: Props) => {
  return (
    <React.Fragment>
      <ConnectWalletButton />
      <Header />
      <div className='random-verify__layout'>
        <Container>
          <div className='center-h mt-50 mb-5'>
            <input type='text' className='input-text' />
          </div>
          <div className='text-small text-center mt-10'>Paste Hash Here To Verify</div>
          <div className='center-h mt-30 mb-30'>
            <Button className='btn-round'>
              Verify Random Number
            </Button>
          </div>
        </Container>
      </div>
      <Footer />
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
)(withRouter(RandomVerifyComposition))
