import { LOAN_REQUESTED } from '../actions/loanActions';
import { LOAN_REQUEST_SUCCESS } from '../actions/loanActions';
import { LOAN_REQUEST_ERROR } from '../actions/loanActions';
import { LOAN_APPROVE_REQUESTED } from '../actions/loanActions';
import { LOAN_APPROVED } from '../actions/loanActions';
import { LOAN_REPAY_REQUESTED } from '../actions/loanActions';
import { LOAN_REPAY_REQUEST_SUCCESS } from '../actions/loanActions';

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

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case LOAN_REPAY_REQUESTED:
      const newLoanList = state.loanList.map((l) => {
        if (l.id === payload.id) {
          return {
            ...l,
            repay: l.repay + 10
          };
        }
        return l;
      });

      return {
        ...state,
        loanList: newLoanList,
        isLoading: true
      };
    case LOAN_REPAY_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
