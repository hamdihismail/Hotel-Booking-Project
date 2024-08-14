package src.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import src.models.Home;

public interface HomeRepository extends JpaRepository<Home, Long> {
    // Custom query methods can be defined here if needed
}
