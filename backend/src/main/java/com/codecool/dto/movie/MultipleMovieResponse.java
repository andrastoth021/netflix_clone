package com.codecool.dto.movie;

import java.util.Set;

public record MultipleMovieResponse(
    Set<MovieResponse> movies
) { }
