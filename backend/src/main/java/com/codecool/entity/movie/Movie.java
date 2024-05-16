package com.codecool.entity.movie;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    private UUID uuid;

    @ManyToMany
    @JoinTable(name = "movie_category_join",
                joinColumns = @JoinColumn(name = "movie_id"),
                inverseJoinColumns = @JoinColumn(name = "category_id"))
    private Set<Category> categories;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "short_description")
    private String shortDescription;

    @Column(name = "release_year")
    private int releaseYear;

    private int pegi;

    private int runtime;

    private int views;

    private Timestamp uploaded;

    @Column(name = "poster_src")
    private String posterSrc;

    @Column(name = "background_src")
    private String backgroundSrc;

    @Column(name = "video_src")
    private String videoSrc;

    public Movie(UUID uuid, Set<Category> categories, String title, String description, String shortDescription, int releaseYear, int pegi, int runtime, int views, Timestamp uploaded, String posterSrc, String backgroundSrc, String videoSrc) {
        this.uuid = UUID.randomUUID();
        this.categories = new HashSet<>(categories);
        this.title = title;
        this.description = description;
        this.shortDescription = shortDescription;
        this.releaseYear = releaseYear;
        this.pegi = pegi;
        this.runtime = runtime;
        this.views = views;
        this.uploaded = new Timestamp(System.currentTimeMillis());
        this.posterSrc = posterSrc;
        this.backgroundSrc = backgroundSrc;
        this.videoSrc = videoSrc;
    }
}
