package com.helloworldbanktransactions.transactions.repo;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.helloworldbanktransactions.transactions.model.Transaction;

public class TransactionData implements TransactionDataInterface{
	@Autowired
	Transaction transaction;
	
	List<Transaction> TransactionList = transactionList(); 
	
		
	public List<Transaction> getAllTransactions() {
		
		return this.TransactionList;
	}
	
	private List<Transaction> transactionList(){
		List<Transaction> TransactionList = new ArrayList<>();
		TransactionList.add(new Transaction("1", "12" , "2", 112.23));
		TransactionList.add(new Transaction("2", "3", "2", 0.45));
		TransactionList.add(new Transaction("3", "2", "14", 100));
		TransactionList.add(new Transaction("3", "12", "4", 200.4));
		TransactionList.add(new Transaction("4", "4", "3", 116.6));
		TransactionList.add(new Transaction("5", "13", "4", 45));
		TransactionList.add(new Transaction("6", "2", "4", 23.23));
		TransactionList.add(new Transaction("7", "2", "12", 69.69));

		
		return TransactionList;
		
	}

	public Transaction getTransactionByID(String id) {
		Iterator<Transaction> iterator = this.TransactionList.iterator();
		
		while(iterator.hasNext()){
			Transaction t = iterator.next();
			if(t.getId().equals(id))
				return t;
		}
		
		return null;
	}

	public List<Transaction> getTransactionsByUserID(String userId) {
		Iterator<Transaction> iterator = this.TransactionList.iterator();
		List<Transaction> senderList = new ArrayList<>();
		while(iterator.hasNext()){
			Transaction t = iterator.next();
			if(t.getSenderId().equals(userId) || t.getReceiverId().equals(userId))
				senderList.add(t);
		}
		
		return senderList;
	}

//	public Transaction getTransactionByReceiverID(String receiverId) {
//		Iterator<Transaction> iterator = this.TransactionList.iterator();
//		
//		while(iterator.hasNext()){
//			Transaction t = iterator.next();
//			if(t.getReceiverId().equals(receiverId))
//				return t;
//		}
//		
//		return null;
//	}

	public void addTransaction(Transaction transaction) {
		this.TransactionList.add(transaction);
		
	}

}
