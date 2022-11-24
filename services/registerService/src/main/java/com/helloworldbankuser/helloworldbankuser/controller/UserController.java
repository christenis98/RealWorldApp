package com.helloworldbankuser.helloworldbankuser.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.helloworldbankuser.helloworldbankuser.model.User;
import com.helloworldbankuser.helloworldbankuser.service.UserService;

@RestController
@RequestMapping("api/users")
@CrossOrigin
public class UserController {

	@Autowired
	UserService service;

	// HTTP methods:
	@GetMapping()
	public ResponseEntity<List<User>> fetchAllUsers() throws Exception {

		List<User> listOfUsers = service.getAllUsers();

		return new ResponseEntity<>(listOfUsers, HttpStatus.OK);
	}
	
	@PostMapping()
	public ResponseEntity<User> saveTeam(@RequestBody User user) throws Exception {
		
		service.save(user);

		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}

}
