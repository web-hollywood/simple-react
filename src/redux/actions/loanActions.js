export const LOAN_REQUESTED = 'LOAN_REQUESTED';
export const LOAN_REQUEST_SUCCESS = 'LOAN_REQUEST_SUCCESS';
export const LOAN_REQUEST_ERROR = 'LOAN_REQUEST_ERROR';
export const LOAN_APPROVE_REQUESTED = 'LOAN_APPROVE_REQUESTED';
export const LOAN_APPROVED = 'LOAN_APPROVED';
export const LOAN_LIST_REQUESTED = 'LOAN_LIST_REQUESTED';
export const LOAN_LIST_REQUEST_SUCCESS = 'LOAN_LIST_REQUEST_SUCCESS';
export const LOAN_REPAY_REQUESTED = 'LOAN_REPAY_REQUESTED';
export const LOAN_REPAY_REQUEST_SUCCESS = 'LOAN_REPAY_REQUEST_SUCCESS';

export const repayLoan = (id) => async (dispatch, getState) => {
	dispatch(repayLoanRequested(id));
	dispatch(repayLoanRequestSucceeded());
};

export const getLoanList = () => async(dispatch, getState) => {
	dispatch(loanListRequested());
	dispatch(loanListRequestSucceeded());
};

export const requestLoan = values => async(dispatch, getState) => {
  dispatch(loanRequested());
  dispatch(loadRequestSucceeded());
};

export const approveLoan = values => async(dispatch, getState) => {
	dispatch(loanApproveRequested());
	dispatch(loanApproved());
};

export const repayLoanRequested = (id) => ({
	type: LOAN_REPAY_REQUESTED,
	payload: { id }
});

export const repayLoanRequestSucceeded = () => ({
	type: LOAN_REPAY_REQUEST_SUCCESS
});

export const loanListRequested = () => ({
	type: LOAN_LIST_REQUESTED
});

export const loanListRequestSucceeded = () => ({
	type: LOAN_LIST_REQUEST_SUCCESS
});

export const loanRequested = () => ({
  type: LOAN_REQUESTED
});

export const loadRequestSucceeded = () => ({
  type: LOAN_REQUEST_SUCCESS
});

export const loanApproveRequested = () => ({
	type: LOAN_APPROVE_REQUESTED
});

export const loanApproved = () => ({
	type: LOAN_APPROVED
});
