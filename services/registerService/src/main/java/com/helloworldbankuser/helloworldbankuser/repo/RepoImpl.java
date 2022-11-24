package com.helloworldbankuser.helloworldbankuser.repo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.helloworldbankuser.helloworldbankuser.model.User;

@Service
public class RepoImpl implements Repo {
	
	
	List<User> usersList = new ArrayList<User>();
	
	@Override
	public List<User> getAllUsers() {
		System.out.println(usersList);
		return usersList;
	}

	@Override
	public User saveUser(User newUser) {	
		System.out.println("hola");
		usersList.add(newUser);
		
		return newUser;
	}
	

}
