package com.got_sopplet.controller;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.NoHandlerFoundException;

@ControllerAdvice
public class ControllerAdvisor
{
  @ExceptionHandler( NoHandlerFoundException.class )
  public String handle( Exception ex )
  {
    return "redirect:/index.html";
  }
}
