package com.codecool.repository;

import com.codecool.entity.movie.Movie;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class MovieRepositoryImpl implements MovieRepositoryCustom {

    EntityManager em;

    @Autowired
    public MovieRepositoryImpl(EntityManager em) {
        this.em = em;
    }

    @Override
    public List<Movie> findAllByFilters(
            Optional<Integer> releaseYearFrom, Optional<Integer> releaseYearTo,
            Optional<Integer> runtimeFrom, Optional<Integer> runtimeTo,
            Optional<Integer> pegiFrom, Optional<Integer> pegiTo
    ) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Movie> cq = cb.createQuery(Movie.class);

        Root<Movie> movie = cq.from(Movie.class);
        List<Predicate> predicates = new ArrayList<>();

        if (releaseYearFrom.isPresent() && releaseYearTo.isPresent()) {
            predicates.add(cb.between(movie.get("releaseYear"), releaseYearFrom.get(), releaseYearTo.get()));
        }
        if (runtimeFrom.isPresent() && runtimeTo.isPresent()) {
            predicates.add(cb.between(movie.get("runtime"), runtimeFrom.get(), runtimeTo.get()));
        }
        if (pegiFrom.isPresent() && pegiTo.isPresent()) {
            predicates.add(cb.between(movie.get("pegi"), pegiFrom.get(), pegiTo.get()));
        }

        cq.where(predicates.toArray(new Predicate[0]));

        TypedQuery<Movie> query = em.createQuery(cq);
        return query.getResultList();
    }

    public Specification<Movie> filterByReleaseYear (Integer releaseYearFrom, Integer releaseYearTo) {
        return (movie, cq, cb) -> cb.between(movie.get("releaseYear"), releaseYearFrom, releaseYearTo);
    }

}
