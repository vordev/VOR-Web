import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button, Card, CardContent } from '@material-ui/core';
import { ArrowForward, Casino, PanTool } from '@material-ui/icons';

import { Container, Footer, Header } from 'components';
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
      <Header />
      <div className='body mt-100 mb-50'>
        <Container>
          <div>
            <div className='text-title text-black mb-20'>
              Start building with Developer docs
            </div>
            <div className='text-small text-gray text-center'>
              VOR supports On-Chain verifiable randomness generation.<br/>
              You can start building the smart contracts with our Developer docs.
            </div>
            <div className='center-h mt-30'>
              <Card className='card mr-30'>
                <CardContent>
                  <div className='center-v text-small text-black mb-30'><Casino /> &nbsp;&nbsp;Randomness</div>
                  <div className='flex-space mb-10'>
                    <div className='text-tiny text-gray'>Overview</div>
                    <ArrowForward className='text-tiny text-gray' />
                  </div>
                  <div className='flex-space mb-10'>
                    <div className='text-tiny text-gray'>Get a Random Number</div>
                    <ArrowForward className='text-tiny text-gray' />
                  </div>
                  <div className='flex-space mb-10'>
                    <div className='text-tiny text-gray'>Verify Randomness Proof</div>
                    <ArrowForward className='text-tiny text-gray' />
                  </div>
                  <div className='flex-space mb-10'>
                    <div className='text-tiny text-gray'>Testnet Contracts</div>
                    <ArrowForward className='text-tiny text-gray' />
                  </div>
                  <br/>
                </CardContent>
              </Card>
              <Card className='card'>
                <CardContent>
                  <div className='center-v text-small text-black mb-30'><PanTool /> &nbsp;&nbsp;Faucet</div>
                  <div className='flex-space mb-10'>
                    <Button className='btn-text' href='/vor/faucet'><div className='text-tiny text-gray'>About VOR Faucet</div></Button>
                    <ArrowForward className='text-tiny text-gray' />
                  </div>
                  <div className='flex-space mb-10'>
                    <Button className='btn-text' href='/vor/faucet'><div className='text-tiny text-gray'>Get Ropsten VOR</div></Button>
                    <ArrowForward className='text-tiny text-gray' />
                  </div>
                  <br/>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className='mb-50'>
            <div className='text-title text-black mt-100 mb-30'>
              We are ready to help you
            </div>
            <div className='text-small text-gray text-center'>
              We have a global community and being always ready to help you.
            </div>
            <div className='center-h mt-30 mb-5'>
              <Button className='btn-round' href='mailto:vrftech@protonmail.com'>
                Get Support
              </Button>
            </div>
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
)(withRouter(HomeComposition))
