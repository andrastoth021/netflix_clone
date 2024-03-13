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

    public ResponseEntity<?> getAllMovie() {
        Set<Movie> movieSet = movieRepository.findAllMovie();
        Set<MovieResponse> result = new HashSet<>();

        movieSet.forEach(movie -> {
            Set<String> categoryNames = new HashSet<>();

            for (Category cat : movie.getCategories()) {
                Category category = categoryRepository.findCategoryById(cat.getId());
                categoryNames.add(category.getName());
            }

            result.add(new MovieResponse(
                categoryNames,
                movie.getTitle(),
                movie.getDescription(),
                movie.getShortDescription(),
                movie.getReleaseYear(),
                movie.getPegi(),
                movie.getRuntime(),
                movie.getPosterSrc(),
                movie.getBackgroundSrc()
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
                                    categoryNames,
                                    movie.get().getTitle(),
                                    movie.get().getDescription(),
                                    movie.get().getShortDescription(),
                                    movie.get().getReleaseYear(),
                                    movie.get().getPegi(),
                                    movie.get().getRuntime(),
                                    movie.get().getPosterSrc(),
                                    movie.get().getBackgroundSrc()
                            )
                    );
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
