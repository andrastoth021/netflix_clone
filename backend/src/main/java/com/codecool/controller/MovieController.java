package com.codecool.controller;

import com.codecool.service.MovieService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping(path = "/api/movie")
public class MovieController {
    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllMovie() {
        return movieService.getAllMovie();
    }

    @GetMapping("/details/{uuid}")
    public ResponseEntity<?> getMovieDetails(@PathVariable UUID uuid) {
        return movieService.getMovieDetails(uuid);
    }

    @GetMapping("/search/{query}")
    public ResponseEntity<?> searchMovies(@PathVariable String query) {
        return movieService.searchMovies(query);
    }

}
