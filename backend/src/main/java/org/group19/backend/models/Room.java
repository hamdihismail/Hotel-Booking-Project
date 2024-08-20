package org.group19.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String type;
    private double price;
    private boolean available;

    @Column(name = "hotel_id", nullable = false)
    private Long hotelId;

    @ManyToOne(optional = true)
    @JoinColumn(name = "hotel_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Hotel hotel;
    // Getters and setters
    
    public Long getId() {
        return id;
    }
    
	public void setId(Long id) {
		this.id = id;	
	}

    public String getType() {
        return type;
    }
    public Room() {}
    
    public Room(String type, double price, boolean available, Long hotelId) {
		super();
		this.type = type;
		this.price = price;
		this.available = available;
		this.hotelId = hotelId;
	}

	public void setType(String type) {
        this.type = type;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
    
    public boolean getAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

	public Long getHotelId() {
		return hotelId;
	}

	public void setHotelId(Long hotelId) {
		this.hotelId = hotelId;
	}
}