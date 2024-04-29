package com.codecool.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(value = DuplicatedException.class)
    public ResponseEntity<ErrorDTO> handleDuplicatedException(DuplicatedException exception) {
        HttpStatus httpStatus = HttpStatus.CONFLICT;
        ErrorDTO errorDTO = new ErrorDTO(exception.getMessage(), httpStatus);

        return new ResponseEntity<>(errorDTO, httpStatus);
    }
}
