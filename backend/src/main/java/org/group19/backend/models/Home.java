package org.group19.backend.models;

@jakarta.persistence.Entity
public class Home {
    
    @jakarta.persistence.Id
    @jakarta.persistence.GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String description;

    // Getters and setters...
    public Long getId() {
        return id;
    }
    
	public void setId(Long id2) {
		this.id = id;	
	}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    
}
