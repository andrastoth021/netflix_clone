package com.codecool.repository;

import com.codecool.entity.movie.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import java.util.Set;
import java.util.UUID;

public interface MovieRepository extends JpaRepository<Movie, Integer> {

    @Query(value = "SELECT * FROM movies ORDER BY title", nativeQuery = true)
    Set<Movie> findAllMovie();

    Optional<Movie> findMovieByUuid(UUID uuid);

    // Set<Movie> findAllByTitleOrDescriptionOrShortDescription(String searchQuery);
    Set<Movie> findAllByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCaseOrShortDescriptionContainingIgnoreCase(String title, String description, String short_desc);
}
