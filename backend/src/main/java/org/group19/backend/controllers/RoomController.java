package org.group19.backend.controllers;


import org.group19.backend.models.Room;
import org.group19.backend.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {
    @Autowired
    private RoomService roomService;

    @GetMapping
    public List<Room> getAllRooms() {
        return roomService.getAllRooms();
    }

    @GetMapping("/{id}")
    public Optional<Room> getRoomById(@PathVariable Long id) {
        return roomService.getRoomById(id);
    }

    @PostMapping("/add")
    public Room createRoom(@RequestBody Room room) {
        return roomService.saveRoom(room);
    }

    @PutMapping("/update/{id}")
    public Room updateRoom(@PathVariable Long id, @RequestBody Room room) {
        room.setId(id);
        return roomService.saveRoom(room);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteRoom(@PathVariable Long id) {
        roomService.deleteRoom(id);
    }
    // New end point for filtering rooms by type
    @GetMapping("/filter/type")
    public List<Room> filterRoomsByType(@RequestParam("type") String type) {
        return roomService.filterRoomsByType(type);
    }

    // New end point for filtering rooms by price range
    @GetMapping("/filter/price")
    public List<Room> filterRoomsByPrice(@RequestParam("minPrice") double minPrice, @RequestParam("maxPrice") double maxPrice) {
        return roomService.filterRoomsByPriceRange(minPrice, maxPrice);
    }
}
