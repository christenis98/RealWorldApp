package com.helloworldbanktransactions.transactions.model;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class Transaction {
	
	private String id;
	private String senderId;
	private String receiverId;
	private double amount;
	private int likes;
	
	public Transaction() {
		
	}
	
	
	public Transaction(String i, String j, String k, double d) {
		super();
		this.id = i;
		this.senderId = j;
		this.receiverId = k;
		this.amount = d;
	}
	private List<String> comments;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getSenderId() {
		return senderId;
	}
	public void setSenderId(String senderId) {
		this.senderId = senderId;
	}
	public String getReceiverId() {
		return receiverId;
	}
	public void setReceiverId(String receiverId) {
		this.receiverId = receiverId;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public int getLikes() {
		return likes;
	}
	public void setLikes(int likes) {
		this.likes = likes;
	}
	public List<String> getComments() {
		return comments;
	}
	public void setComments(List<String> comments) {
		this.comments = comments;
	}
	
	

}
