package com.helloworldbankuser.helloworldbankuser.repo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.helloworldbankuser.helloworldbankuser.model.User;

@Component
public interface Repo {
	
	public List<User> usersList = null;
	
	public List<User> getAllUsers();
	
	public User saveUser(User newUser);
}
