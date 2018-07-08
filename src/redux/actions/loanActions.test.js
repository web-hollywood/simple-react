import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './loanActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loan actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      userName: 'Test User',
		  loanList: [
		    { id: 0, user: 'tester1', title: 'for building my house', amount: 10, status: 'approved', repay: 0 },
		    { id: 1, user: 'tester2', title: 'purpose of this loan', amount: 20, status: 'approved', repay: 0 },
		    { id: 2, user: 'tester3', title: 'for his wedding', amount: 30, status: 'pending', repay: 0 },
		    { id: 3, user: 'tester4', title: 'Jackson wants to run his business', amount: 40, status: 'approved', repay: 0 },
		    { id: 4, user: 'tester5', title: 'I don\'t know', amount: 50, status: 'pending', repay: 0 }
		  ]
    });
  });

  describe('getLoanList action', () => {
    it(`should dispatch ${actions.LOAN_LIST_REQUESTED} action`, async () => {

      await store.dispatch(actions.getLoanList());

      expect(store.getActions()).toContainEqual({
        type: actions.LOAN_LIST_REQUESTED,
      });
    });

    it(`should dispatch ${actions.LOAN_LIST_REQUEST_SUCCESS} action`, async () => {

      await store.dispatch(actions.getLoanList());

      expect(store.getActions()).toContainEqual({
        type: actions.LOAN_LIST_REQUEST_SUCCESS,
      });
    });
  });

  describe('repayLoan action', () => {
    it(`should dispatch ${actions.LOAN_REPAY_REQUESTED} action`, async () => {

      await store.dispatch(actions.repayLoan(0));

      expect(store.getActions()).toContainEqual({
        type: actions.LOAN_REPAY_REQUESTED,
        payload: { id: 0 }
      });
    });

    it(`should dispatch ${actions.LOAN_REPAY_REQUEST_SUCCESS} action`, async () => {

      await store.dispatch(actions.repayLoan(0));

      expect(store.getActions()).toContainEqual({
        type: actions.LOAN_REPAY_REQUEST_SUCCESS,
      });
    });
  });

});
