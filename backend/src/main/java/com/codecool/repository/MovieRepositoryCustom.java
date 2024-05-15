package com.codecool.repository;

import com.codecool.entity.movie.Movie;

import java.util.List;
import java.util.Optional;

public interface MovieRepositoryCustom {

    List<Movie> findAllByFilters(
            Optional<Integer> releaseYearFrom, Optional<Integer> releaseYearTo,
            Optional<Integer> runtimeFrom, Optional<Integer> runtimeTo,
            Optional<Integer> pegiFrom, Optional<Integer> pegiTo
    );
}
