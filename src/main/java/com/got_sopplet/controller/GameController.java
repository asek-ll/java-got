package com.got_sopplet.controller;

import com.got_sopplet.model.Game;
import com.got_sopplet.services.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
public class GameController {

    @Autowired
    private GameService gameService;

    @RequestMapping(value = "/api/games", method = RequestMethod.GET)
    public List<Game> getAllGames() {
        return gameService.getAll();
    }

    @RequestMapping(value = "/api/games", method = RequestMethod.POST)
    public ResponseEntity<Game> createGame(@RequestBody Game game) {

        game.setCreated(new Date());
        game.setStatus("New 2");

        gameService.add(game);

        return new ResponseEntity<Game>(game, HttpStatus.OK);
    }

}
