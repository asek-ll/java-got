package com.got_sopplet.dao;

import com.got_sopplet.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

import java.util.logging.Logger;

@Repository
public class UserDao implements UserDetailsService {
    @Autowired
    private MongoTemplate mongoOperations;

    private static final Logger log = Logger.getLogger(UserDao.class.getName());

    public User getFirstUser() {

        final Query query = new Query(Criteria.where("username").is("admin"));

        return mongoOperations.findOne(query, User.class);
    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        final Query query = new Query(Criteria.where("username").is(username));
        User user = mongoOperations.findOne(query, User.class);
        if (user == null) {
            throw new UsernameNotFoundException("user dont exists");
        }
        return user;
    }
}
