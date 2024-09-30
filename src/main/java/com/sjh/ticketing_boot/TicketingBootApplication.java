package com.sjh.ticketing_boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TicketingBootApplication {

	public static void main(String[] args) {
		String javaVersion = System.getProperty("java.version");
		System.out.println("Java Version: " + javaVersion);
		System.out.println("Java Version: " + javaVersion);
		System.out.println("Java Version: " + javaVersion);
		SpringApplication.run(TicketingBootApplication.class, args);
	}

}
