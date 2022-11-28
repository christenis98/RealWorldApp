package com.helloworldbankuser.helloworldbankuser.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.helloworldbankuser.helloworldbankuser.model.User;
import com.helloworldbankuser.helloworldbankuser.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

	@Autowired
	UserService service;

	// HTTP methods:
	@GetMapping()
	public ResponseEntity<List<User>> getAllUsers() throws Exception {

		List<User> listOfUsers = service.getAllUsers();

		return new ResponseEntity<>(listOfUsers, HttpStatus.OK);
	}
	
	@GetMapping(path = "/{id}")
	public ResponseEntity<User> getUser(@PathVariable String id) throws Exception {
		User user = service.getUser(id);
		
		if (user == null) {
			throw new Exception("ID not found: " + id);
		}
		
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
	
	@PostMapping()
	public ResponseEntity<User> saveTeam(@RequestBody User user) throws Exception {		
		service.save(user);
		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}

}
