# Buddy finder
An application that offers some match making services for the players from a town. We can add more users. There is a view called ```create-player```. There we can create a new person. Once we have them, we can generate teams. There is a view called ```all-teams```. There we have a button that triggers the team generation. Also, in the same view we can see all the generated teams. Teams are generated using a neural network. Also, we have the possibility to view all the existent players. There is a view called ```all-players``` where we can scroll through all existent ones. We can also se the player details (first name, last name, age, weight, etc.). 
  
## Technologies

* [Git](https://git-scm.com/)
* [GitHub](https://github.com)
* [Angular 5](https://angular.io)
* [W3.CSS](https://www.w3schools.com/w3css/)
* [Bootstrap 3.3](https://getbootstrap.com/docs/3.3)
* [Angular material design](https://material.angular.io)
* DeepLearning (python library)
* Cheras (python library)


## Components
The application is composed of the following components:

* Backend
    * An application written in python.
    * It contains all the logic for the team generation.
    * It has a REST API designed to communicate with the Frontend app.
    
* Frontend
    * An angular, web application.
    * It contains all the UIs of the application.
    * It communications with Backed app using the REST API exposed by the backed to fetch and post the data.
