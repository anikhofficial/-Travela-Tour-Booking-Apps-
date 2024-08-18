# Tour Booking Application

## Overview
This is a full-stack Tour Booking Application built using Angular 18 for the front-end, Spring Boot 3.3.0 for the back-end, and MySQL for the database. The application allows users to book tours, manage locations, schedules, and prices. It includes CRUD operations for all entities involved in the booking process.

## Features
- **User Authentication**: Secure login and registration.
- **Tour Management**: Create, read, update, and delete tour information.
- **Location Management**: Manage locations for tours.
- **Schedule Management**: Set and manage tour schedules.
- **Pricing**: Define and manage tour pricing.
- **Booking System**: Allow users to book tours and view their bookings.
- **Responsive Design**: Works on both desktop and mobile devices.

## Technologies Used
- **Front-end**: Angular 18
- **Back-end**: Spring Boot 3.3.0
- **Database**: MySQL
- **Other Tools**: Maven, Hibernate, JWT for authentication, Angular Material for UI components

## Getting Started

### Prerequisites
- Node.js and npm installed
- Angular CLI installed
- Java JDK 17
- Maven
- MySQL server

### Installation

#### Backend (Spring Boot)

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/tour-booking-app.git
    cd tour-booking-app/backend
    ```

2. Configure MySQL database:
    Update the `application.properties` file with your MySQL database credentials.
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/tour_booking
    spring.datasource.username=root
    spring.datasource.password=yourpassword
    spring.jpa.hibernate.ddl-auto=update
    ```

3. Build and run the application:
    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

#### Frontend (Angular)

1. Navigate to the front-end directory:
    ```bash
    cd ../frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the Angular development server:
    ```bash
    ng serve
    ```

4. Open your browser and navigate to `http://localhost:4200`.

### Usage

1. Register a new user or log in with existing credentials.
2. Create and manage tours, locations, schedules, and prices.
3. Book a tour and view booking details.

## Project Structure

### Backend
- **/src/main/java/com/example/tourbooking**: Contains the main application code.
- **/src/main/resources**: Contains configuration files.

### Frontend
- **/src/app**: Contains Angular components, services, and modules.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## Contact
For any questions or suggestions, please contact us at anikhofficial@gmail.com

## Acknowledgements
- Thanks to the developers of Angular, Spring Boot, and MySQL for their amazing tools and frameworks.
