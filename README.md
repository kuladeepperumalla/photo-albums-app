# Photo Albums App  

> A simple demonstration of my knowledge on reusable components like Accordions, Buttons, Panel, Thunks and may more using JSON server as back end and tailwind CSS for UI and ClassNames library for more customization of classnames and facker.JS for User data, album names and loremflicker for random images generated in the album.

<img src="./public/images/mainscreen.png">

This project is part of my proof of concept on React Redux, Reusable components, RESTful API, JSON server, DOM manipulation, Hooks, Slices and Thunks. Live demonstration of the application is deployed on Render, Please click here -> [Demo](https://kuladeepperumalla.github.io/Gaming-world---online-game-shop/) (Note: Due to the free hosting service, server loads after a minute! Thanks for your patience! <3 )


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Build Process](#build-process)
- [Developer](#Developer)





## Introduction

> Photo Albums App generates random users and users can add any number of photos generated from the API. (This App is built for POC purpose only)
- This is a single page web application where all the data is fetched and requests are made to API without reloding the page.
- Used accordions to expand the data on click and add photos inside the expandable pannels
- Users, Albums, Photos can be Added and Deleted
- isLoading and isError used all accross the application to handle exceptions in case of bad server or 404 responses from the API
- Look into [features](#Features) for code snippets and more understanding.  

****

## Features

A few of the things you can do with Gaming world:

****


> Add a User
> -

#### Get all users
```http
  GET /https://photos-albums-app-mockserver.onrender.com/users/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`    | `string` | **Required**.              |
| `id`      | `number` | **Required**.              |





## Build Process


## 💻 Run Locally

Clone the project

```bash
  git clone 
```

Go to the project directory

```bash
  cd 
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```



---

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![JSON](https://img.shields.io/badge/JSON-gray?style=for-the-badge&logo=json&logoColor=yellow)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)


## Developer

This project is brought to you by  [Kuladeep Perumalla](https://github.com/kuladeepperumalla)).
