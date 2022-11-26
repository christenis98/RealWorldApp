package com.helloworldbankuser.helloworldbankuser;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class HelloworldbankuserApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloworldbankuserApplication.class, args);
	}

}
