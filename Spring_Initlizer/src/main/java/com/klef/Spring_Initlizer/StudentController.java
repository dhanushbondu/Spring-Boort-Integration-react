package com.klef.Spring_Initlizer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController {
	
	@Autowired
	private StudentService studentservice;
	
	
	@PostMapping("/insert-data")
	public String insertStudent(@RequestBody Student student, Model model) {
		
		model.addAttribute("Student", student);
		studentservice.insertStudent(student);
		return "inserted sucesfull!!";
	}
	
}
