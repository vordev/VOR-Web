import { put, takeLatest, fork, select } from 'redux-saga/effects';
import {
  ActionType,
  Action
} from 'types';

import { web3client } from 'lib';
import { setAccount } from './accountActions';
import { selectAccount } from './accountSelector';

function* setAccountSaga() {
  try {
    const address = yield web3client.getAccount();
    if (address) {
      yield put(setAccount({ address }));
    }
    else {
      yield put(setAccount(undefined));
    }
  } catch(err) {
    yield put(setAccount(undefined));
  }
}

function* getFaucetSaga({ payload }: Action<number>) {
  try {
    const state = yield select();
    const account = selectAccount(state);
    if (!account) return;

    if (payload === 1) {
      yield web3client.get1Drip(account.address);
    } else if (payload === 2) {
      yield web3client.get2Drip(account.address);
    } else if (payload === 5) {
      yield web3client.get5Drip(account.address);
    }
  } catch(err) {
  }
}

function* accountSagaWatcher() {
  yield takeLatest(ActionType.LOAD_ACCOUNT as any, setAccountSaga);
  yield takeLatest(ActionType.GET_FAUCET as any, getFaucetSaga);
}

export default [
  fork(accountSagaWatcher),
];
