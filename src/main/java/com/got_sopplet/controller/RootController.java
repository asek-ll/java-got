package com.got_sopplet.controller;

import org.springframework.stereotype.Controller;

@Controller
public class RootController
{
  public String rootPath()
  {
    return "/index.html";
  }
}
