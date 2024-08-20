Hotel Booking Web Application

Project Overview
This Hotel Booking Web Application is designed to allow users to browse hotels, view room details, and make bookings. The application is built using a Spring Boot backend and a React-based frontend, providing a seamless user experience for managing hotel reservations.

Features
    - User registration and authentication
    - Search and filter hotels and rooms
    - Booking management (create, update, and delete bookings)
    - Responsive UI for both desktop and mobile devices

Prerequisites
    - Java 17+
    - Node.js and npm (for the frontend)
    - MySQL (for the database)
    - Maven (for managing Java dependencies)

Installation

Backend (Spring Boot)
    1. Clone the repository:
        git clone <https://github.com/hamdihismail/Hotel-Booking-Project>
    
    2. Navigate to the backend directory:
        cd Hotel-Booking-Project-main/Backend
    
    3. Install dependencies and build the project using Maven:
        mvn clean install
    
    4.Configure the MySQL database in the application.properties file located in src/main/resources/:
        spring.datasource.url=jdbc:mysql://localhost:3306/hotel_booking
        spring.datasource.username=<your-username>
        spring.datasource.password=<your-password>
    
    5.Run the application:
        mvn spring-boot:run

Frontend (React)
    1.Navigate to the frontend directory:
        cd Hotel-Booking-Project-main/Frontend/hotel-booking-app
    
    2. Install dependencies:
        npm install
    
    3. Start the development server:
        npm start

Usage

Once both the backend and frontend are running:
    - Access the application via your browser at http://localhost:3000.
    - Register a new user account, or log in if you already have one.
    - Browse hotels, filter rooms based on preferences, and make bookings.

Project Structure

    Hotel-Booking-Project-main/
        Backend/
            src/
            pom.xml
            ...
        Frontend/
            hotel-booking-app/
                src/
                public/
                package.json
                ...
        README.md

Contributing

    - Hamdi Ismail - Developer
    - Curtis Loveys - Developer
    - William Pennell - Developer

License

This project is licensed under the MIT License.