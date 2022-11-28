package com.helloworldbankuser.helloworldbankuser.controller;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.helloworldbankuser.helloworldbankuser.model.User;
import com.helloworldbankuser.helloworldbankuser.repo.RepoImpl;



@SpringBootTest(classes= RepoImpl.class)
public class UserControllerTest {
	
	@Autowired
	RepoImpl userList;
	
	@Autowired
	User user;
	

	@Test
	void basicTest() {
		user.setId("1");
		user.setUserName("tpopescu");
		user.setName("timo");
		user.setPassword("1234");
		user.setEmail("solera@solera.com");
		userList.saveUser(user);
		
		assertEquals(user, userList.getAllUsers());
		
	}
	

}
