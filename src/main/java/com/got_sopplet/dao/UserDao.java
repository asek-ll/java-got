package com.got_sopplet.dao;

import com.got_sopplet.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao
{
  @Autowired
  private MongoTemplate mongoOperations;

  public User getFirstUser()
  {

    final Query query = new Query( Criteria.where( "username" ).is( "admin" ) );

    return mongoOperations.findOne( query, User.class );
  }

}
