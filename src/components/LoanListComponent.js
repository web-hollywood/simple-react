import React from 'react';
import PropTypes from 'prop-types';
import { getBEMClasses } from '../helpers/cssClassesHelper';

import '../styles/components/loanListComponent.css';

const loanListClasses = getBEMClasses(['loan-list']);

const LoanListComponent = (props, context) => {

	const { loanList, repayLoan } = props;

	const domLoanList = loanList.map(row => (
		<div key={row.id} className={loanListClasses('row')}>
			<div className = {loanListClasses('cell-user')}>{row.user}</div>
			<div className = {loanListClasses('cell-title')}>{row.title}</div>
			<div className = {loanListClasses('cell-amount')}>{row.amount}</div>
			<div className = {loanListClasses('cell-status')}>{row.status}</div>
			<div className = {loanListClasses('cell-repay')}>{row.repay}</div>
			<div className = {loanListClasses('cell-actions')}>
				<input type="button" className = {loanListClasses('cell-btn')} value="Repay" onClick={() => repayLoan(row.id)} />
			</div>
		</div>
	));

	return(
		<div className={loanListClasses('container')}>
			<div className={loanListClasses('row')}>
				<div className = {loanListClasses('cell-user')}>User Name</div>
				<div className = {loanListClasses('cell-title')}>Loan Title</div>
				<div className = {loanListClasses('cell-amount')}>Amount</div>
				<div className = {loanListClasses('cell-status')}>Status</div>
				<div className = {loanListClasses('cell-repay')}>Repaid Amount</div>
				<div className = {loanListClasses('cell-actions')}>Actions</div>
			</div>
	    	{ domLoanList }
	  	</div>
	)
};

export default LoanListComponent;
