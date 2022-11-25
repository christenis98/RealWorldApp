package com.helloworldbankuser.helloworldbankuser.model;

import org.springframework.stereotype.Component;

@Component

public class Account {
	private String name;

    private double moneyAmount;
    
    private String id;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getMoneyAmount() {
		return moneyAmount;
	}

	public void setMoneyAmount(double moneyAmount) {
		this.moneyAmount = moneyAmount;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
    
    

}
