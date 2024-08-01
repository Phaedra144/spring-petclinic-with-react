# PetClinic Java Spring Application with React

This is an exercise project deepening my React knowledge combined with refreshing my Java Spring knowledge.

## Installation

[Backend good to knows and installation summary](https://github.com/Phaedra144/spring-petclinic-with-react/tree/main/backend#readme)

[Frontend good to knows and installation summary](https://github.com/Phaedra144/spring-petclinic-with-react/tree/main/frontend#readme)

## Usage

Backend

Useful links to set up java environment in vscode:
- https://code.visualstudio.com/docs/java/java-tutorial
- https://code.visualstudio.com/docs/java/extensions

Sample server start with postgres:
`docker-compose --profile postgres up`
`./mvnw spring-boot:run -Dspring-boot.run.profiles=postgres`

Frontend

node version v20.15.0

`nm run dev`


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

### What to improve

- Toggle navbar in responsive screens
- Extend features with:
  - Pet creation/modification
  - Visit creation
- Service layer between repository and controller
- Remove thymeleaf and mvc controllers
