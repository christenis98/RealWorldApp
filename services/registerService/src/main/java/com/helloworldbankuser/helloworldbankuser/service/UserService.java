package com.helloworldbankuser.helloworldbankuser.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.helloworldbankuser.helloworldbankuser.model.User;
import com.helloworldbankuser.helloworldbankuser.repo.Repo;

@Service
public class UserService {

	@Autowired
	Repo userRepository;

	public List<User> getAllUsers() throws Exception {
		return userRepository.getAllUsers();
	}
	
	public User save(User user) throws Exception {
		userRepository.saveUser(user);
		return user;
	}
}
