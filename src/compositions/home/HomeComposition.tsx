import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { Container, ConnectWalletButton, Footer, Hero, Header } from 'components';
import { RootState } from 'types';
import { selectAccount } from 'store/account/accountSelector';

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
      <Header />
      <div className='body mt-100 mb-50'>
        <Container>
          <div className='text-title text-black mb-30'>
            We are ready to help you
          </div>
          <div className='text-small text-gray text-center'>
            We have a global community and being always ready to help you.
          </div>
          <div className='center-h mt-30 mb-5'>
            <Button className='btn-round'>
              Get Support
            </Button>
          </div>
        </Container>
      </div>
      <Hero />
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
)(withRouter(HomeComposition))
