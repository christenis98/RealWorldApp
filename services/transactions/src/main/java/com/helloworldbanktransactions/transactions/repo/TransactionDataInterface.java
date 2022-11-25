package com.helloworldbanktransactions.transactions.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.helloworldbanktransactions.transactions.model.Transaction;

public interface TransactionDataInterface {
	
	@Autowired
	public List<Transaction> getAllTransactions();


}
