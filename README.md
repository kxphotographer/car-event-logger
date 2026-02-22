# Car event logger project

This is a project for following 2 purposes:

1. To store and manage car event data: odometer readings, fueling, maintenances, services, etc.
2. To study and share the software development architecture and patterns.

## Detail about 1

I have a SUBARU SAMBAR which has already discontinued as an in-house manufactured car by former Fuji Heavy Industries (nowadays SUBARU corporation) in 2012, and I had been longing for this car since I took my driver's license in 2015, because of its unique characteristics compared to other Kei cars that day, and even now.

To drive this car as long as possible, I want to manage any kind of information about this car. This project is mainly for this purpose.

This application records and manages the following information:
- Vehicle information
- Odometer readings
- Events
    - Fueling
    - Checks
        - Parts replacement histories may be linked
    - Maintenances and services
        - Parts replacement histories may be linked
    - Parts and chemicals w/ numbers of genuine or third party parts, standard replacement intervals, etc.
    - Parts and chemicals replacements and their replacement intervals (how many kilometers or how many days after the last replacement)
    - Notes
    - Other

Based on the data above, the application also provides the following features:

- Fuel efficiency calculation
- Check and parts replacement reminders
- Issue URL for sharing service history records

## Detail about 2

Putting aside the main purpose mentioned above, I also want to study and think about how I can apply architecture and patterns to software development through this project.

This project mainly applies the following architecture and patterns:

### Layered Architecture

This codebase consists of the following layers:

- Domain layer
    - Contains the core business logic including data definitions and rules
- Application layer
    - Contains the application services and use cases to orchestrate the domain layer and infrastructure layer
- Infrastructure layer
    - Contains the data access and external service integrations
- Presentation layer
    - Provides the user interface and presentation logic

### Domain-Driven Design

This codebase applies the following Domain-Driven Design patterns:

- Entity
- Value Object
- Aggregate
