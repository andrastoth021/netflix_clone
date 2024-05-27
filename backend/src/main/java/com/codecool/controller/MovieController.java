package com.codecool.controller;

import com.codecool.service.MovieService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
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

    @GetMapping("/filter")
    public ResponseEntity<?> filterMovies(
            @RequestParam(name = "releaseFrom", required = false) Optional<Integer> releaseFrom,
            @RequestParam(name = "releaseTo", required = false) Optional<Integer> releaseTo,
            @RequestParam(name = "runtimeFrom", required = false) Optional<Integer> runtimeFrom,
            @RequestParam(name = "runtimeTo", required = false) Optional<Integer> runtimeTo,
            @RequestParam(name = "pegiFrom", required = false) Optional<Integer> pegiFrom,
            @RequestParam(name = "pegiTo", required = false) Optional<Integer> pegiTo
    ) {
        return movieService.getFilteredMovie(releaseFrom, releaseTo, runtimeFrom, runtimeTo, pegiFrom, pegiTo);
    }

    @GetMapping("/latest")
    public ResponseEntity<?> getLatestMovies() {
        return movieService.findNewestMovies();
    }

    @GetMapping("/popular")
    public ResponseEntity<?> getPopularMovies() {
        return movieService.findMostPopularMovies();
    }
}
