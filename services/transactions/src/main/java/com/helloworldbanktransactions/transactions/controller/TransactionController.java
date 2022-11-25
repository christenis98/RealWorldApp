package com.helloworldbanktransactions.transactions.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.helloworldbanktransactions.transactions.model.Transaction;
import com.helloworldbanktransactions.transactions.service.TransactionService;

@RestController
@RequestMapping("api/transaction")
@CrossOrigin
public class TransactionController {
	
	@Autowired
	TransactionService service;
	
	//HTTP methods:
	
	@GetMapping()
	public ResponseEntity<List<Transaction>> fetchAllTransactions() throws Exception{
		List<Transaction> listOfTransactions = service.getAllTransactions();
		
		return new ResponseEntity<>(listOfTransactions, HttpStatus.OK);
	}
	
	@GetMapping(path = "/{userId}")
	public ResponseEntity<List<Transaction>> fetchTransactionsByUser(@PathVariable String userId) 
			throws Exception {
		List<Transaction> transactionList = service.getTransactionByUserId(userId);
		if (transactionList.isEmpty())
			throw new Exception("That user has no transactions: " + userId);
		return new ResponseEntity<>(transactionList, HttpStatus.OK);
	}
	
	@GetMapping(path = "/user/{transactionId}")
	public ResponseEntity<Transaction> fetchTransactionById(String transactionId) 
			throws Exception{
		Transaction transaction = service.getTransactionByID(transactionId);
		if (transaction == null) {
			throw new Exception("No transaction with this id: " + transactionId);
		}
		return new ResponseEntity<>(transaction, HttpStatus.OK);
	}
	

}
