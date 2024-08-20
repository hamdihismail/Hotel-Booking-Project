package org.group19.backend.repository;

import org.group19.backend.models.Home;
import org.springframework.data.jpa.repository.JpaRepository;



public interface HomeRepository extends JpaRepository<Home, Long> {
    // Custom query methods can be defined here if needed
}
