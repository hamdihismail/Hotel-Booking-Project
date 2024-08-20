package org.group19.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.group19.backend.models.Hotel;
import org.group19.backend.services.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/hotels")
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

    @PostMapping("/add")
    public Hotel createHotel(@RequestBody Hotel hotel) {
        return hotelService.saveHotel(hotel);
    }

    @PutMapping("/update/{id}")
    public Hotel updateHotel(@PathVariable Long id, @RequestBody Hotel hotel) {
        hotel.setId(id);
        return hotelService.saveHotel(hotel);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteHotel(@PathVariable Long id) {
        hotelService.deleteHotel(id);
    }
    // New end point for searching hotels by name
    @GetMapping("/search")
    public List<Hotel> searchHotels(@RequestParam("name") String name) {
        return hotelService.searchHotelsByName(name);
    }

    // New end point for filtering hotels by city
    @GetMapping("/filter")
    public List<Hotel> filterHotels(@RequestParam("city") String city) {
        return hotelService.filterHotelsByCity(city);
    }
}
