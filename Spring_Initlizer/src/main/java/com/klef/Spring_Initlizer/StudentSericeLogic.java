package com.klef.Spring_Initlizer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
public class StudentSericeLogic implements StudentService {

	@Autowired
	public StudentRepo studentrepo;
	
	
	@Override
	@Transactional
	public String insertStudent(Student student) {
		studentrepo.save(student);
		return "student inserted sucess!!";
	}
	 
}
