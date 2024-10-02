package com.sjh.ticketing_boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@Controller
public class TicketingBootApplication {

	public static void main(String[] args) {
		String javaVersion = System.getProperty("java.version");
		System.out.println("Java Version: " + javaVersion);
		System.out.println("Java Version: " + javaVersion);
		System.out.println("Java Version: " + javaVersion);
		SpringApplication.run(TicketingBootApplication.class, args);
	}

	// 라우팅에 . 이 포함되지않는 모든 라우팅은 index.html 리턴
	@GetMapping("/**/{path:[^\\.]*}")
	public String spaRedirect() {
		return "forward:/index.html";
	}

	@GetMapping("/api")
	public String redirectAdmin() {
		return "redirect:/swagger-ui/index.html";
	}
}
