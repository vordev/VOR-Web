import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button, FormControl, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';

import { Container, ConnectWalletButton, Footer, Header } from 'components';
import { RootState } from 'types';
import { selectAccount } from 'store/account/accountSelector';

enum FaucetOption {
  TenToken = '10',
  TwentyToken = '20',
  FiftyToken = '50',
}

interface StateFromProps {
  account: ReturnType<typeof selectAccount>;
}
interface DispatchFromProps {
}
interface OwnProps {}

type Props = StateFromProps & DispatchFromProps & OwnProps & RouteComponentProps;

export const RandomVerifyComposition = ({ account, history }: Props) => {
  const [option, setOption] = React.useState<FaucetOption>(FaucetOption.TenToken);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption((event.target as HTMLInputElement).value as FaucetOption);
  }

  return (
    <React.Fragment>
      <ConnectWalletButton />
      <Header />
      <div className='random-faucet__layout'>
        <Container>
          <div className='center-h mb-20'>
            <FormControl component='fieldset'>
              <RadioGroup aria-label='options' name='faucet' value={option} onChange={handleOptionChange}>
                <FormControlLabel className='mb-10' value={FaucetOption.TenToken} control={<Radio />} label="Get 10 VOR with a minumum time limit of 1 hour" />
                <FormControlLabel className='mb-10' value={FaucetOption.TwentyToken} control={<Radio />} label="Get 20 VOR with a minumum time limit of 2 hours" />
                <FormControlLabel className='mb-10' value={FaucetOption.FiftyToken} control={<Radio />} label="Get 50 VOR with a minumum time limit of 5 hours" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className='center-h mt-30 mb-30'>
            <Button className='btn-round'>
              Send me Test VOR
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
