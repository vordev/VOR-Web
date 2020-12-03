import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button, IconButton } from '@material-ui/core';
import { Container } from 'components';
import { selectAccount } from 'store/account/accountSelector';
import { RootState } from 'types';
import { truncateAddress } from 'utils';
import Config from 'config';
import { loadAccount } from 'store/account/accountActions';

interface StateFromProps {
  account: ReturnType<typeof selectAccount>;
}
interface DispatchFromProps {
  loadAccount: typeof loadAccount;
}
type Props = StateFromProps & DispatchFromProps & RouteComponentProps;

const Navbar: React.FC<Props> = ({ account, history, loadAccount }: Props) => {
  return (
    <Container>
      <div className="nav-header">
        <IconButton className='nav-header__logo' onClick={() => history.push('/')}>
        </IconButton>
        <div className="flex-h">
          <Button className='btn-text' onClick={() => history.push('/')} >HOMEPAGE</Button>
          <Button className='btn-text' onClick={() => history.push('/rules')} >RULES</Button>
          <Button className='btn-text' onClick={() => history.push('/dashboard')} >RACE</Button>
          <Button className='btn-text' onClick={() => history.push('/farm')} >FARM</Button>
          <Button className='btn-text' onClick={() => history.push('/stats')} >STATS</Button>
        </div>
        {account ? (
          <Button
            variant='contained'
            className='btn-header'
            href={`${Config.etherscan}${account.address}`}
            target='_blank'
          >{truncateAddress(account.address)}</Button>
        ) : (
          <IconButton onClick={loadAccount} className='nav-header__button' >
          </IconButton>
        )}
      </div>
    </Container>
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
    loadAccount: () => dispatch(loadAccount()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Navbar));
