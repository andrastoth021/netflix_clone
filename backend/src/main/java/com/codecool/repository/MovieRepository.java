package com.codecool.repository;

import com.codecool.entity.movie.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface MovieRepository extends JpaRepository<Movie, Integer>, MovieRepositoryCustom, JpaSpecificationExecutor<Movie> {

    @Query(value = "SELECT * FROM movies ORDER BY title", nativeQuery = true)
    List<Movie> findAllMovie();

    Optional<Movie> findMovieByUuid(UUID uuid);

    List<Movie> findAllByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCaseOrShortDescriptionContainingIgnoreCase(String title, String description, String short_desc);

    @Query(value = "SELECT * FROM movies ORDER BY uploaded DESC", nativeQuery = true)
    List<Movie> findAllByUploadedOrderByUploaded();

    @Query(value = "SELECT * FROM movies ORDER BY views DESC", nativeQuery = true)
    List<Movie> findAllByViewsOrderByViews();
}
