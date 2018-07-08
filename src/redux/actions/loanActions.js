export const LOAN_REQUESTED = 'LOAN_REQUESTED';
export const LOAN_REQUEST_SUCCESS = 'LOAN_REQUEST_SUCCESS';
export const LOAN_REQUEST_ERROR = 'LOAN_REQUEST_ERROR';
export const LOAN_APPROVE_REQUESTED = 'LOAN_APPROVE_REQUESTED';
export const LOAN_APPROVED = 'LOAN_APPROVED';

export const requestLoan = values => async (dispatch, getState) => {
  dispatch(loanRequested());
  dispatch(loadRequestSucceeded());
};

export const approveLoan = values => async (dispatch, getState) => {
	dispatch(loanApproveRequested());
	dispatch(loanApproved());
};

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
