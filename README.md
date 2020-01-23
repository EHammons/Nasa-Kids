# Nasa Kids
> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Deployed App
https://nasa-kids-final.herokuapp.com/

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
As our group project 3, we feel the existing resources available for children about NASA and getting them interested in outer space and exploration, are a bit lacking. NASA has many more important things to focus on, so we decided to create an app to bring the wonders of it all to children in a more fun environment.

## Technologies
* MongoDB
* JavaScript
* Bootstrap
* React

## Code Examples
    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <h2 className="text-center">Image of the day</h2>
                    </Col>
                </Row>
                <Row>
                    <img className="imageofday" src={this.state.result.url}/>
                </Row>
                <Row><h4 className="imageofdaytitle">{this.state.result.title}</h4></Row>

## Features
List of features ready and TODOs for future development:
### Features
* "Games" include a trivia game, click game with 3 difficulty levels and a hangman-like game called "Earth Protector"
* Glossary scraped and created from NASA children's site.
* API call to fetch and display NASA image of the day and title. If image of the day is a video, it does not display.
### Technical Design
* NASA brand guide followed for logo, font and image layout.
* Navbar background created based on stars in logo.
### Future Development
* The "Cool Pics" page needs to be populated.
* The "Match" game is not set up.
* The "Earth Protector" game has bugs to fix.
* The "High Scores" page needs formating and some work done on the database side.
* Eventually a login and user profile should be added.

## Status
Project is: _under development_, but currently _paused_

## Inspiration
Based on the final project assignment for The Coding Bootcamp at UT Austin.
Inspired by a love of space and it's exploration.

## Contact
Created by Elise Hammons (and project group 3) - feel free to contact me!
<br>LinkedIn: https://www.linkedin.com/in/elise-h-01243258/