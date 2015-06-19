package com.got_sopplet.controller;

import com.got_sopplet.model.User;
import com.got_sopplet.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController
{
  @Autowired
  private UserService userService;

  @RequestMapping( "/user" )
  public User user()
  {
    return userService.getUser();
  }
}
