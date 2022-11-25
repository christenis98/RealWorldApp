package com.helloworldbanktransactions.transactions.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.helloworldbanktransactions.transactions.model.Transaction;

@Component
public interface TransactionDataInterface {
	
	
	public List<Transaction> getAllTransactions();


}
