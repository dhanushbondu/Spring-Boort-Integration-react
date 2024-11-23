package com.klef.Spring_Initlizer;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends  JpaRepository<Student,Integer>{

}
