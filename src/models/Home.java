package src.models;

@jakarta.persistence.Entity
public class Home {
    
    @jakarta.persistence.Id
    @jakarta.persistence.GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String description;

    // Getters and setters...
}
