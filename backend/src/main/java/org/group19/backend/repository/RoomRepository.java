package org.group19.backend.repository;



import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.group19.backend.models.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {
	@Query("SELECT r FROM Room r WHERE r.price <= :price")
    List<Room> findByMaxPrice(@Param("price") double price);
	List<Room> findByPriceBetween(double minPrice, double maxPrice);
	List<Room> findByType(String type);

    // Add more query methods for filtering based on availability, room type, etc.
}
