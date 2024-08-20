package org.group19.backend;


import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.group19.backend.models.Role;
import org.group19.backend.models.Room;
import org.group19.backend.models.User;
import org.group19.backend.models.Hotel;
import org.group19.backend.repository.HotelRepository;
import org.group19.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner{
	
	@Autowired 
	UserRepository ob;
	@Autowired 
	HotelRepository hr;
	private final PasswordEncoder passwordEncoder;

	public BackendApplication(PasswordEncoder passwordEncoder) {
		this.passwordEncoder = passwordEncoder;
	}

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception
    {
//         Inserting the test data in the mysql table.
		List<User> initialUsers = Arrays.asList(
	            new User("Tester", "tester@example.com", passwordEncoder.encode("password"), Role.USER ),
	            new User("Admin", "admin@example.com", passwordEncoder.encode("password"), Role.ADMIN ),
	            new User("Hotel", "hotel@example.com", passwordEncoder.encode("password"), Role.HOTEL )
	        );
//		
		for (User user : initialUsers) {
            Optional<User> existingUser = ob.findByUsername(user.getUsername());
            if (existingUser.isPresent()) {
                System.out.println("Initial user " + user.getUsername() + " already present");
            } else {
                ob.save(user);
                System.out.println("User " + user.getUsername() + " created successfully");
            }
		}
//		Inserting sample rooms
		List<Room> roomsForHilton = Arrays.asList(
			new Room("single", 300, true, 1L ),
		    new Room("double", 600, false, 1L ),
		    new Room("suite", 900, true, 1L ),
		    new Room("single", 300, false, 1L ),
		    new Room("double", 600, true, 1L ),
		    new Room("suite", 900, false, 1L ),
		    new Room("single", 300, true, 1L ),
		    new Room("double", 600, false, 1L ),
		    new Room("suite", 900, false, 1L ),
		    new Room("single", 300, false, 1L ),
		    new Room("double", 600, false, 1L ),
		    new Room("suite", 900, false, 1L ),
		    new Room("single", 300, false, 1L ),
		    new Room("double", 600, false, 1L ),
		    new Room("suite", 900, false, 1L ),
		    new Room("single", 300, false, 1L ),
		    new Room("double", 600, true, 1L ),
		    new Room("suite", 900, false, 1L ),
		    new Room("single", 300, true, 1L ),
		    new Room("double", 600, false, 1L )
			);  
		List<Room> roomsForMarriott = Arrays.asList(
				new Room("single", 320, true, 2L),
			     new Room("double", 640, false, 2L),
			     new Room("suite", 960, true, 2L),
			     new Room("single", 320, false, 2L),
			     new Room("double", 640, true, 2L),
			     new Room("suite", 960, false, 2L),
			     new Room("single", 320, true, 2L),
			     new Room("double", 640, true, 2L),
			     new Room("suite", 960, true, 2L),
			     new Room("single", 320, true, 2L),
			     new Room("double", 640, true, 2L),
			     new Room("suite", 960, true, 2L),
			     new Room("single", 320, true, 2L),
			     new Room("double", 640, false, 2L),
			     new Room("suite", 960, true, 2L),
			     new Room("single", 320, false, 2L),
			     new Room("double", 640, true, 2L),
			     new Room("suite", 960, false, 2L),
			     new Room("single", 320, true, 2L),
			     new Room("double", 640, false, 2L)
				);  
		List<Room> roomsForFairmont = Arrays.asList(
				new Room("single", 340, true, 3L),
			     new Room("double", 680, false, 3L),
			     new Room("suite", 1020, true, 3L),
			     new Room("single", 340, false, 3L),
			     new Room("double", 680, true, 3L),
			     new Room("suite", 1020, false, 3L),
			     new Room("single", 340, true, 3L),
			     new Room("double", 680, false, 3L),
			     new Room("suite", 1020, true, 3L),
			     new Room("single", 340, true, 3L),
			     new Room("double", 680, true, 3L),
			     new Room("suite", 1020, true, 3L),
			     new Room("single", 340, true, 3L),
			     new Room("double", 680, true, 3L),
			     new Room("suite", 1020, true, 3L),
			     new Room("single", 340, false, 3L),
			     new Room("double", 680, true, 3L),
			     new Room("suite", 1020, false, 3L),
			     new Room("single", 340, true, 3L),
			     new Room("double", 680, false, 3L)
				);  
		List<Room> roomsForSheratonNY = Arrays.asList(
				new Room("single", 360, true, 4L),
			     new Room("double", 720, false, 4L),
			     new Room("suite", 1080, true, 4L),
			     new Room("single", 360, false, 4L),
			     new Room("double", 720, false, 4L),
			     new Room("suite", 1080, false, 4L),
			     new Room("single", 360, false, 4L),
			     new Room("double", 720, false, 4L),
			     new Room("suite", 1080, false, 4L),
			     new Room("single", 360, false, 4L),
			     new Room("double", 720, true, 4L),
			     new Room("suite", 1080, false, 4L),
			     new Room("single", 360, true, 4L),
			     new Room("double", 720, false, 4L),
			     new Room("suite", 1080, true, 4L),
			     new Room("single", 360, false, 4L),
			     new Room("double", 720, true, 4L),
			     new Room("suite", 1080, false, 4L),
			     new Room("single", 360, true, 4L),
			     new Room("double", 720, false, 4L)
				);  
		List<Room> roomsForRitzLA = Arrays.asList(
				new Room("single", 380,false, 5L),
			     new Room("double", 760,false, 5L),
			     new Room("suite", 1140,false, 5L),
			     new Room("single", 380,false, 5L),
			     new Room("double", 760,true, 5L),
			     new Room("suite", 1140,false, 5L),
			     new Room("single", 380,true, 5L),
			     new Room("double", 760,false, 5L),
			     new Room("suite", 1140,true, 5L),
			     new Room("single", 380,false, 5L),
			     new Room("double", 760,true, 5L),
			     new Room("suite", 1140,true, 5L),
			     new Room("single", 380,true, 5L),
			     new Room("double", 760,true, 5L),
			     new Room("suite", 1140,true, 5L),
			     new Room("single", 380,true, 5L),
			     new Room("double", 760,true, 5L),
			     new Room("suite", 1140,false, 5L),
			     new Room("single", 380,true, 5L),
			     new Room("double", 760,false, 5L)
				);  
		List<Room> roomsForHyattLondon = Arrays.asList(
				new Room("single", 400, true, 6L),
			     new Room("double", 800, false, 6L),
			     new Room("suite", 1200, true, 6L),
			     new Room("single", 400, false, 6L),
			     new Room("double", 800, true, 6L),
			     new Room("suite", 1200, false, 6L),
			     new Room("single", 400, true, 6L),
			     new Room("double", 800, false, 6L),
			     new Room("suite", 1200, true, 6L),
			     new Room("single", 400, false, 6L),
			     new Room("double", 800, false, 6L),
			     new Room("suite", 1200, false, 6L),
			     new Room("single", 400, false, 6L),
			     new Room("double", 800, false, 6L),
			     new Room("suite", 1200, false, 6L),
			     new Room("single", 400, false, 6L),
			     new Room("double", 800, true, 6L),
			     new Room("suite", 1200, false, 6L),
			     new Room("single", 400, true, 6L),
			     new Room("double", 800, false, 6L)
				);  
		List<Room> roomsForParis = Arrays.asList(
				new Room("single", 420,true, 7L),
			     new Room("double", 840,true, 7L),
			     new Room("suite", 1260,true, 7L),
			     new Room("single", 420,true, 7L),
			     new Room("double", 840,true, 7L),
			     new Room("suite", 1260,true, 7L),
			     new Room("single", 420,true, 7L),
			     new Room("double", 840,false, 7L),
			     new Room("suite", 1260,true, 7L),
			     new Room("single", 420,false, 7L),
			     new Room("double", 840,true, 7L),
			     new Room("suite", 1260,false, 7L),
			     new Room("single", 420,true, 7L),
			     new Room("double", 840,false, 7L),
			     new Room("suite", 1260,true, 7L),
			     new Room("single", 420,false, 7L),
			     new Room("double", 840,true, 7L),
			     new Room("suite", 1260,false, 7L),
			     new Room("single", 420,true, 7L),
			     new Room("double", 840,false, 7L)
				);  
		List<Room> roomsForBurjDubai = Arrays.asList(
				new Room("single", 440, false, 8L),
			     new Room("double", 880, false, 8L),
			     new Room("suite", 1320, false, 8L),
			     new Room("single", 440, false, 8L),
			     new Room("double", 880, false, 8L),
			     new Room("suite", 1320, false, 8L),
			     new Room("single", 440, true, 8L),
			     new Room("double", 880, false, 8L),
			     new Room("suite", 1320, true, 8L),
			     new Room("single", 440, false, 8L),
			     new Room("double", 880, true, 8L),
			     new Room("suite", 1320, false, 8L),
			     new Room("single", 440, true, 8L),
			     new Room("double", 880, false, 8L),
			     new Room("suite", 1320, true, 8L),
			     new Room("single", 440, false, 8L),
			     new Room("double", 880, true, 8L),
			     new Room("suite", 1320, false, 8L),
			     new Room("single", 440, true, 8L),
			     new Room("double", 880, false, 8L)
				);  
		List<Room> roomsForMandarin = Arrays.asList(
				new Room("single", 460, true, 9L),
			     new Room("double", 920, true, 9L),
			     new Room("suite", 1380, true, 9L),
			     new Room("single", 460, true, 9L),
			     new Room("double", 920, true, 9L),
			     new Room("suite", 1380, true, 9L),
			     new Room("single", 460, true, 9L),
			     new Room("double", 920, true, 9L),
			     new Room("suite", 1380, true, 9L),
			     new Room("single", 460, true, 9L),
			     new Room("double", 920, true, 9L),
			     new Room("suite", 1380, false, 9L),
			     new Room("single", 460, true, 9L),
			     new Room("double", 920, false, 9L),
			     new Room("suite", 1380, true, 9L),
			     new Room("single", 460, false, 9L),
			     new Room("double", 920, true, 9L),
			     new Room("suite", 1380, false, 9L),
			     new Room("single", 460, true, 9L),
			     new Room("double", 920, false, 9L)
				);  
		List<Room> roomsForBurjKhalifa = Arrays.asList(
				new Room("single", 440, false, 10L),
				new Room("double", 880, false, 10L),
			     new Room("party", 1320, false, 10L),
			     new Room("single", 440, false, 10L),
			     new Room("double", 880, false, 10L),
			     new Room("party", 1320, false, 10L),
			     new Room("single", 440, true, 10L),
			     new Room("double", 880, false, 10L),
			     new Room("party", 1320, true, 10L),
			     new Room("single", 440, false, 10L),
			     new Room("double", 880, false, 10L),
			     new Room("party", 1320, false, 10L),
			     new Room("single", 440, false, 10L),
			     new Room("double", 880, false, 10L),
			     new Room("party", 1320, false, 10L),
			     new Room("single", 440, false, 10L),
			     new Room("double", 880, true, 10L),
			     new Room("party", 1320, false, 10L),
			     new Room("single", 440, true, 10L),
			     new Room("double", 880, false, 10L)
				);  
//		Inserting sample hotels
		List<Hotel> initialHotels = Arrays.asList(
	            new Hotel("Hilton Toronto", "Toronto", "torontohilton@hiltonhotels.com", roomsForHilton ),
	            new Hotel("Marriott Montreal", "Montreal", "montrealmarriott@marriotthotels.com", roomsForMarriott ),
	            new Hotel("Fairmont Vancouver", "Vancouver", "vancouverfairmont@fairmont.com", roomsForFairmont ),
	            new Hotel("Sheraton New York", "New York", "newyorksheraton@sheraton.com", roomsForSheratonNY ),
	            new Hotel("Ritz-Carlton Los Angeles", "Los Angeles", "losangelesritz@ritzcarlton.com", roomsForRitzLA ),
	            new Hotel("Hyatt Regency London", "London", "londonhyatt@hyatt.com", roomsForHyattLondon ),
	            new Hotel("Le Meurice Paris", "Paris", "parislemeurice@dorchester.com", roomsForParis ),
	            new Hotel("Burj Al Arab Dubai", "Dubai", "dubaiburjalarab@jumeirah.com", roomsForBurjDubai ),
	            new Hotel("Mandarin Oriental Tokyo", "Tokyo", "tokyomandarin@mandarinoriental.com", roomsForMandarin ),
	            new Hotel("Burj Khalifa", "Dubai", "dubaiburjkhalifa@khalifa.com", roomsForBurjKhalifa )
	        );
	
		for (Hotel hotel : initialHotels) {
            Optional<Hotel> existingHotel = hr.findByHotelName(hotel.getName());
            if (existingHotel.isPresent()) {
                System.out.println("Initial Hotel " + hotel.getName() + " already present");
            } else {
                hr.save(hotel);
                System.out.println("Hotel " + hotel.getName() + " created successfully");
            }
		}

    }

}
