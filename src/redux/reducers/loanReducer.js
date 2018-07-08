import { LOAN_REQUESTED } from '../actions/loanActions';
import { LOAN_REQUEST_SUCCESS } from '../actions/loanActions';
import { LOAN_REQUEST_ERROR } from '../actions/loanActions';
import { LOAN_APPROVE_REQUESTED } from '../actions/loanActions';
import { LOAN_APPROVED } from '../actions/loanActions';

const initialState = {
  userName: 'Test User'
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}
