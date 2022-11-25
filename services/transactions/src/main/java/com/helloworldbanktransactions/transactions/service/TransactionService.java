package com.helloworldbanktransactions.transactions.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helloworldbanktransactions.transactions.model.Transaction;
import com.helloworldbanktransactions.transactions.repo.TransactionData;

@Service
public class TransactionService {
	
	@Autowired
	TransactionData transactionData;
	
	public List<Transaction> getAllTransactions() throws Exception{
		return transactionData.getAllTransactions();
	}
	
	public Transaction getTransactionByID(String id) {
		return this.transactionData.getTransactionByID(id);
	}
	
	public List<Transaction> getTransactionByUserId(String UserId) {
		
		return this.transactionData.getTransactionsByUserID(UserId);
	}
	
//	public Transaction getTransactionByReceiverId(String receiverId) {
//		return this.transactionData.getTransactionByReceiverID(receiverId);
//	}
	
	public void addTransaction(Transaction transaction) {
		this.transactionData.addTransaction(transaction);
	}
	
//	public boolean checkData(Transaction transaction) {
//		if (transaction == null)
//			throw new EmptyObjectException("Team is null");
//		
//		if(transaction.getId()!= null)
//			throw
//	}

}
