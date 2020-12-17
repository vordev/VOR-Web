import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button, FormControl, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';

import { Container, ConnectWalletButton, Footer, Header } from 'components';
import { RootState } from 'types';
import { selectAccount } from 'store/account/accountSelector';
import { getFaucet } from 'store/account/accountActions';

enum FaucetOption {
  OneToken = '1',
  TwoToken = '2',
  FiveToken = '5',
}

interface StateFromProps {
  account: ReturnType<typeof selectAccount>;
}
interface DispatchFromProps {
  getFaucet: typeof getFaucet;
}
interface OwnProps {}

type Props = StateFromProps & DispatchFromProps & OwnProps & RouteComponentProps;

export const VORFaucetComposition = ({ getFaucet, account }: Props) => {
  const [option, setOption] = React.useState<FaucetOption>(FaucetOption.OneToken);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption((event.target as HTMLInputElement).value as FaucetOption);
  }

  const handleGetFaucet = () => {
    const amount = parseInt(option);
    getFaucet(amount);
  }

  return (
    <React.Fragment>
      {account && account.address ? null : <ConnectWalletButton />}
      <Header />
      <div className='random-faucet__layout'>
        <Container>
          <div className='center-h mb-20'>
            <FormControl component='fieldset'>
              <RadioGroup aria-label='options' name='faucet' value={option} onChange={handleOptionChange}>
                <FormControlLabel className='mb-10' value={FaucetOption.OneToken} control={<Radio />} label="Get 1 VOR with a minumum time limit of 1 hour" />
                <FormControlLabel className='mb-10' value={FaucetOption.TwoToken} control={<Radio />} label="Get 2 VOR with a minumum time limit of 2 hours" />
                <FormControlLabel className='mb-10' value={FaucetOption.FiveToken} control={<Radio />} label="Get 5 VOR with a minumum time limit of 5 hours" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className='center-h mt-30 mb-30'>
            <Button className='btn-round' onClick={handleGetFaucet}>
              Send me Test VOR
            </Button>
          </div>
          <div className='center-h mt-50 mb-30'>
            <Button className='btn-round' href='/'>
              Go to the Home
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
    getFaucet: (payload: number) => dispatch(getFaucet(payload))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(VORFaucetComposition))
