import React from 'react';
import { mount } from 'enzyme';
import LoanListComponent from './LoanListComponent';

describe('LoanListComponent', () => {

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

  const buildSubject = (props = initialState) => {
    const subject = (
      <LoanListComponent
        {...props}
      />
    );
    return mount(subject, {});
  };

  it('should render loan list container', () => {
    const subject = buildSubject();

    expect(subject.find('.loan-list__container').length).toBe(1);
  });

  
});
