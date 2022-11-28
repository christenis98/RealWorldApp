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
		return usersList;
	}

	@Override
	public User saveUser(User newUser) {
		usersList.add(newUser);
		return newUser;
	}

	@Override
	public User findById(String id) {
		for(User user: usersList)
			if(user.getId().equals(id))
				return user;
		return null;
	}
}
