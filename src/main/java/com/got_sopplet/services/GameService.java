package com.got_sopplet.services;

import com.got_sopplet.dao.GameDao;
import com.got_sopplet.model.Game;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    @Autowired
    private GameDao gameDao;

    @Secured("ROLE_USER")
    public void add(Game game) {
        gameDao.save(game);
    }

    public List<Game> getAll() {
        return gameDao.getGames();
    }
}
