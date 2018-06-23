# Team Capybaras
This is a web based temporary letting site where a property owner (a capybara) can list a home available to rent.
The property owner can add a single title, description, contact email and set of available dates for rent.
A visitor to the site can add view these details and get in touch with the property owner via email.

### Quickstart:
#### How to install the code:
1. Fork this project
2. Use node version 10.4.0
3. Run ```npm install``` to add module dependencies

#### How to use the website:
1. Open the server with ```node index.js```
2. The terminal will display the localhost port number for you to visit: ```localhost:3000```
3. When finished with the application, close the server with ```^c```

#### How to run the tests:
Jasmine SpecRunner file includes all spec and source code files.
All unit tests can be run via a browser, type ```open SpecRunner.html``` in to the terminal.

Cypress is used for the feature tests and can be run via the terminal with ```$(npm bin)/cypress run --browser chrome```
A Chrome window will open and run through the interaction of the site before your eyes.

### Approach to solving the challenge:
1. Agreed to team objects
2. Discussed application requirements and agreed MVP
3. Broke MVP down into individual user stories
4. MVP was achieved with a HTML landing page
5. Use Github and branches to work on separate elements of the project
6. Review the team pull requests and provide code review where edits are necessary
7. Regular planning sessions (daily and sometimes half daily) to keep on track and review next steps after major commits
8. Spikes for new technologies approached (Cypress and jQuery and http-server module) and teach other team members what we've learnt during spikes to pool resources and help the whole group learn efficiently.

### Current Status:
Express frame work setup with one route that a capybara can list a property for let on
Entry point is index.js
Unit and feature tests all passing

### Intended next steps:
1. User be able to upload images for a property
2. Website able to accommodate multiple listings with database integration
3. Login for property owners

### Description of what code does:
Set up a landing page where a user can input data and see it displayed on the page as a property listing.  

### Code Style:
Vanilla JavaScript on the back end with Jasmine.
Express framework for the front end and Cypress syntax for testing features.
jQuery for page interaction and HTML/CSS styling using Bootstrap.

### Features:
1. Input property info via form fields (title, description, emails, dates)
2. User in-put is then displayed
3. Property image is displayed</br></br>
![alt text](https://github.com/anguspettifer/Capybnb/blob/master/READMEImages/CapybnbForm.png "CapybnbForm")
</br>

![alt text](https://github.com/anguspettifer/Capybnb/blob/master/READMEImages/Capybnb%20Blank%20Property%20Listing.png "CapybnbBlankProperty")

### Code Example:
Extract from the codebase:
```
AddContent.prototype.addDescription = function (description) {
  this.description = description;
};

AddContent.prototype.getDescription = function () {
  return this.description;
};

AddContent.prototype.addTitle = function (title) {
  this.title = title;
};;

AddContent.prototype.getTitle = function () {
  return this.title;
};;
```

### MVP:
- Letter can list a space
- Letter can display a photo
- Letter can post a description
- Potential tenant can send message to letter

### User Stories:
```
As a property owner,
So that I can attract a tenant,
I would like to add a title for my property

As a property owner,
So that I can attract a tenant,
I would like to add a description for my property

As a property owner,
So that I can be contacted by a potential tenant,
I would like to add a contact email address

As a property owner,
So that I can attract a tenant,
I would like to view an photo of my property

As a property owner,
So that I can let my property,
I would like to add a range of available dates
```

### Team Work:

__Team Objectives and Commitments:__
- Learning to work as a team
- Don’t get blocked on something for more than 30mins
- Routine we are agreed to
- Checkin on team welfare, including end of week feedback
- TDD
- Mix of pairing and self-learning
- MVP ==> very M (or very V?)
- Team lunch on Friday

__Organizational Strategy__
- Use Trello for workflow
- Hold daily ceremonies

__Team Working Routine Agreed to:__
- 9:30am standup
- 4:45pm (agree on pairing for following day)
- Meditation and yoga for self care

__Example Mid Project Planning Session__
![alt text](https://github.com/anguspettifer/Capybnb/blob/master/READMEImages/ExampleTeamCapybnbPlanningSession.jpg "Team planning session")

__Reflection on the Week__

- Teamwork:
   1. Good at tackling the tough things, e.g. group feedback
   2. Small piece of a puzzle is vs a big piece
   3. Setting objectives on day one for structure
   4. Pairing digs you out of holes
   5. Retros/Checkins/Structure is v important
   6. Github collaboration, though more to learn here for efficiency
   7. Trello for our workflow
   8. Not having a walkthrough and achieving stuff without them
   9. Really good teamwork in terms of doing a spike and then a show and tell to the group to share group knowledge
   10. Group feedback was well thought through and a really positive experience
- Code:
   1. jQuery
   2. Express
   3. CSS
   4. Cypress
   5. Git branching
   6. How to serve a js document in order to get cypress to test it (http server)
   7. Building on code “you” wrote went well, no-one got stuck building on any code in the group
- What we could improve on:
  1. TDD (we got 50:50)
  2. Lunch..wtf (git!)
  3. Git process
  4. Ask coach for code review
- End of Week Retro:
![alt text](https://github.com/anguspettifer/Capybnb/blob/master/READMEImages/EndofWeekRetro.jpg "end of week retro")
