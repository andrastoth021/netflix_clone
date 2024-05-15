package com.codecool.dto.movie;

import java.util.List;
import java.util.Set;

public record MultipleMovieResponse(
    List<MovieResponse> movies
) { }
