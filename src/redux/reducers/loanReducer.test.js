import * as actions from '../actions/loanActions';
import reducer from './loanReducer';

describe('loan reducer', () => {
  it('Should return initial state', () => {
    const initialState = {
      userName: 'Test User',
      loanList: [
        { id: 0, user: 'tester1', title: 'for building my house', amount: 10, status: 'approved', repay: 0 },
        { id: 1, user: 'tester2', title: 'purpose of this loan', amount: 20, status: 'approved', repay: 0 },
        { id: 2, user: 'tester3', title: 'for his wedding', amount: 30, status: 'pending', repay: 0 },
        { id: 3, user: 'tester4', title: 'Jackson wants to run his business', amount: 40, status: 'approved', repay: 0 },
        { id: 4, user: 'tester5', title: 'I don\'t know', amount: 50, status: 'pending', repay: 0 }
      ],
      isLoading: false
    };

    const newState = reducer(undefined, {});

    expect(newState).toEqual(initialState);
  });

  it(`Should handle ${actions.LOAN_REPAY_REQUESTED} action`, () => {

    const newState = reducer(undefined, actions.repayLoanRequested(0));

    expect(newState.isLoading).toEqual(true);
  });

  it(`Should handle ${actions.LOAN_REPAY_REQUEST_SUCCESS} action`, () => {
    const newState = reducer(undefined, actions.repayLoanRequestSucceeded(0));

    expect(newState.isLoading).toEqual(false);
  });
});
