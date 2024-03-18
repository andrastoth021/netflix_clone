package com.codecool.dto.movie;

import java.util.Set;
import java.util.UUID;

public record MovieResponse(
    UUID uuid,
    Set<String> categoryNames,
    String title,
    String description,
    String shortDescription,
    int releaseYear,
    int pegi,
    int runtime,
    String posterSrc,
    String backgroundSrc,
    String videoSrc
) { }
