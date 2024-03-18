package com.codecool.repository;

import com.codecool.entity.movie.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

    Category findCategoryById(Integer id);
}
