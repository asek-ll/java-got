package com.got_sopplet.dao;

import com.got_sopplet.model.Game;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class GameDao {
    @Autowired
    private MongoTemplate mongoOperations;

    public List<Game> getGames() {
        return mongoOperations.find(new Query(), Game.class);
    }

    public void save(Game game) {
        mongoOperations.save(game);
    }
}
