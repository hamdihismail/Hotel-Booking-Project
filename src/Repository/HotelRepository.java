package src.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import src.models.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
	@Query("SELECT h FROM Hotel h WHERE h.name LIKE %:name%")
    List<Hotel> findByName(@Param("name") String name);
	List<Hotel> findByAddressContaining(String address);

    // Add more query methods for filtering based on other fields like address, etc.
}
