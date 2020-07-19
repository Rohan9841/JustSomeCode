package com.rohan.rest.webservices.service;

import java.util.List;

import com.rohan.rest.webservices.model.Todo;

public interface TodoService {

	List<Todo> findAll();
	Todo deleteById(long id);
	Todo findById(long id);
	Todo save(Todo todo);
 }
