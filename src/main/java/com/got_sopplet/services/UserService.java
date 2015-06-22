package com.got_sopplet.services;

import com.got_sopplet.dao.UserDao;
import com.got_sopplet.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserDao userDao;

    public User getUser() {
        return userDao.getFirstUser();
    }

    @Secured("ROLE_USER")
    public User getCurrentUser() {
        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }
}
