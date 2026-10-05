package com.rajesh.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rajesh.dto.LoginDTO;

@RestController
@RequestMapping("/rajesh")
@CrossOrigin(origins = "*")  
public class Login {
@PostMapping("/login")
public String myLogin(@RequestBody LoginDTO request)
{
	String username=request.getUserName();
	String password=request.getPassWord();
	return "Hello 	"+username;
}
}
