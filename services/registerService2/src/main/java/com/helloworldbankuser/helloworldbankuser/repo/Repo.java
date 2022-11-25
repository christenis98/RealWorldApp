package com.helloworldbankuser.helloworldbankuser.repo;

import java.util.List;
import org.springframework.stereotype.Component;
import com.helloworldbankuser.helloworldbankuser.model.User;

@Component
public interface Repo {
	
	public List<User> usersList = null;
	
	public List<User> getAllUsers();
	
	public User saveUser(User newUser);
	
	public User findById(String id);
}
