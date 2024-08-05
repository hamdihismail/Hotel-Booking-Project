package src.controllers;

import src.models.Hotel;
import src.services.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/hotels")
public class HotelController {
    @Autowired
    private HotelService hotelService;

    @GetMapping
    public List<Hotel> getAllHotels() {
        return hotelService.getAllHotels();
    }

    @GetMapping("/{id}")
    public Optional<Hotel> getHotelById(@PathVariable Long id) {
        return hotelService.getHotelById(id);
    }

    @PostMapping
    public Hotel createHotel(@RequestBody Hotel hotel) {
        return hotelService.saveHotel(hotel);
    }

    @PutMapping("/{id}")
    public Hotel updateHotel(@PathVariable Long id, @RequestBody Hotel hotel) {
        hotel.setId(id);
        return hotelService.saveHotel(hotel);
    }

    @DeleteMapping("/{id}")
    public void deleteHotel(@PathVariable Long id) {
        hotelService.deleteHotel(id);
    }
    // New end point for searching hotels by name
    @GetMapping("/search")
    public List<Hotel> searchHotels(@RequestParam("name") String name) {
        return hotelService.searchHotelsByName(name);
    }

    // New end point for filtering hotels by address
    @GetMapping("/filter")
    public List<Hotel> filterHotels(@RequestParam("address") String address) {
        return hotelService.filterHotelsByAddress(address);
    }
}
