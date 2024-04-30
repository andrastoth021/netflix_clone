package com.codecool.exception;

import org.springframework.http.HttpStatus;

public record ErrorDTO(String message, HttpStatus httpStatus) { } 
