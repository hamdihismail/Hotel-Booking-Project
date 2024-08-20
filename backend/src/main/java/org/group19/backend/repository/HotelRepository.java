package org.group19.backend.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.group19.backend.models.Hotel;
import org.group19.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
	@Query("SELECT h FROM Hotel h WHERE h.name LIKE %:name%")
    List<Hotel> findByName(@Param("name") String name);
	List<Hotel> findByCityContaining(String city);

    // Add more query methods for filtering based on other fields like address, etc.
	@Query("SELECT h FROM Hotel h WHERE h.name LIKE %:name%")
	Optional<Hotel> findByHotelName(@Param("name")String username);
}
