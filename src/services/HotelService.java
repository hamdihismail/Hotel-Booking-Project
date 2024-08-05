package src.services;

import src.models.Hotel;
import src.Repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HotelService {
    @Autowired
    private HotelRepository hotelRepository;

    public List<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }

    public Optional<Hotel> getHotelById(Long id) {
        return hotelRepository.findById(id);
    }

    public Hotel saveHotel(Hotel hotel) {
        return hotelRepository.save(hotel);
    }

    public void deleteHotel(Long id) {
        hotelRepository.deleteById(id);
    }
    // New methods for searching and filtering
    public List<Hotel> searchHotelsByName(String name) {
        return hotelRepository.findByName(name);
    }

    public List<Hotel> filterHotelsByCity(String city) {
        return hotelRepository.findByCityContaining(city);
    }
}
