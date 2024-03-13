package com.codecool.dto.movie;

import java.util.Set;

public record MovieResponse(
    Set<String> categoryNames,
    String title,
    String description,
    String shortDescription,
    int releaseYear,
    int pegi,
    int runtime,
    String posterSrc,
    String backgroundSrc
) { }
