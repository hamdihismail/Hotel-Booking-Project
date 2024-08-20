package org.group19.backend.services;


import org.group19.backend.models.Room;
import org.group19.backend.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {
    @Autowired
    private RoomRepository roomRepository;

    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    public Optional<Room> getRoomById(Long id) {
        return roomRepository.findById(id);
    }

    public Room saveRoom(Room room) {
        return roomRepository.save(room);
    }

    public void deleteRoom(Long id) {
        roomRepository.deleteById(id);
    }
	// New methods for searching and filtering
    public List<Room> filterRoomsByType(String type) {
        return roomRepository.findByType(type);
    }

    public List<Room> filterRoomsByPriceRange(double minPrice, double maxPrice) {
        return roomRepository.findByPriceBetween(minPrice, maxPrice);
    }
}
