package com.got_sopplet.controller;

import com.got_sopplet.user.User;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController
{
  @RequestMapping( "/user" )
  public User user()
  {
    return new User( 1L, "Me" );
  }
}
