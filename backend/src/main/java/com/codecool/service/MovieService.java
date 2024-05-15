package com.codecool.service;

import com.codecool.dto.movie.MovieResponse;
import com.codecool.dto.movie.MultipleMovieResponse;
import com.codecool.entity.movie.Category;
import com.codecool.entity.movie.Movie;
import com.codecool.repository.CategoryRepository;
import com.codecool.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MovieService {
    private final MovieRepository movieRepository;
    private final CategoryRepository categoryRepository;

    @Autowired
    public MovieService(MovieRepository movieRepository, CategoryRepository categoryRepository) {
        this.movieRepository = movieRepository;
        this.categoryRepository = categoryRepository;
    }

    private List<MovieResponse> pairEachMovieWithItsCategories(List<Movie> movieList) {
        List<MovieResponse> result = new ArrayList<>();

        movieList.forEach(movie -> {
            Set<String> categoryNames = new HashSet<>();

            for (Category cat : movie.getCategories()) {
                Category category = categoryRepository.findCategoryById(cat.getId());
                categoryNames.add(category.getName());
            }

            result.add(new MovieResponse(
                movie.getUuid(),
                categoryNames,
                movie.getTitle(),
                movie.getDescription(),
                movie.getShortDescription(),
                movie.getReleaseYear(),
                movie.getPegi(),
                movie.getRuntime(),
                movie.getPosterSrc(),
                movie.getBackgroundSrc(),
                movie.getVideoSrc()
            ));
        });


        return ResponseEntity.status(HttpStatus.OK)
            .body(new MultipleMovieResponse(result));
    }

    public ResponseEntity<?> getMovieDetails(UUID uuid) {
        Optional<Movie> movie = movieRepository.findMovieByUuid(uuid);

        if (movie.isPresent()) {
            Set<String> categoryNames = new HashSet<>();

            for (Category cat : movie.get().getCategories()) {
                Category category = categoryRepository.findCategoryById(cat.getId());
                categoryNames.add(category.getName());
            }

            return ResponseEntity.status(HttpStatus.OK)
                    .body(new MovieResponse(
                                    movie.get().getUuid(),
                                    categoryNames,
                                    movie.get().getTitle(),
                                    movie.get().getDescription(),
                                    movie.get().getShortDescription(),
                                    movie.get().getReleaseYear(),
                                    movie.get().getPegi(),
                                    movie.get().getRuntime(),
                                    movie.get().getPosterSrc(),
                                    movie.get().getBackgroundSrc(),
                                    movie.get().getVideoSrc()
                            )
                    );
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<?> searchMovies(String searchQuery) {
        List<Movie> movieSet = movieRepository.findAllByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCaseOrShortDescriptionContainingIgnoreCase(searchQuery, searchQuery, searchQuery);
        List<MovieResponse> result = pairEachMovieWithItsCategories(movieSet);

        return ResponseEntity.status(HttpStatus.OK)
                .body(new MultipleMovieResponse(result));
    }
}
