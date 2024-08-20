package org.group19.backend.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String city;  // Changed from address to city
    private String contactInfo;

    @OneToMany(mappedBy = "hotel", cascade = CascadeType.ALL)
    private List<Room> rooms;

    // Getters and setters
    
    public Long getId() {
        return id;
    }
    public Hotel() {}
    
	public Hotel(String name, String city, String contactInfo, List<Room> rooms) {
		super();
		this.name = name;
		this.city = city;
		this.contactInfo = contactInfo;
		this.rooms = rooms;
	}

	public void setId(Long id) {
		this.id = id;	
	}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
    
    public String getContact() {
        return contactInfo;
    }

    public void setContact(String contactInfo) {
        this.contactInfo = contactInfo;
    }
    public List<Room> getRooms() {
        return rooms;
    }

    public void setRooms(List<Room> rooms) {
        this.rooms = rooms;
    }
 // Additional method to add a room to the hotel
    public void addRoom(Room room) {
        rooms.add(room);
        room.setHotelId(id);;
    }
    
}