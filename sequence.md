# This is the sequence of things that I did in order to create my online portfolio

## Initialization and Set Up

1. First I created the client side of the react app by running **npx create-react-app client** in the terminal
   (In order to start the server and the client, cd into the client folder and run **npm start** for the from end and **nodemon server**)

2. I then removed all of the comments and previously written code app.js, index.css, app.css, remove the comments from index.js and index.html

3. Next, I installed tailwindcss by running **npm install -D tailwindcss postcss autoprefixer** and **npx tailwindcss init -p** because this would be what I was going to use for styling. I then added the base, components, and utilities to the index.css file (follow the documentation for using tailwindcss with a react app)

4. Afterward, I installed react router because it allows me to route file paths to specific pages (added to App.js) **npm install react-router-dom**

create a pages folder and a components folder

Use rfce in the head of a js file to create the header for the file

I added two folders to the src folder in order to organize everything I was using. These two folders are the pages folder and the components folder
Put things in the components folder if they are going to be used in multiple pages.
I added a home folder to the pages folder and added an index.js file to the home folder
I added the primary, secondary and tertiary colors to the tailwind config file so I could use them in the future

I added the letters to the header and added the background color of the header file

The index.js file is where the home screen of the project is and is where all of the things that will go onto the home screen will be added
Be sure to import all of the components that you will be using for a specific page to the index.js file in that pages folder.
The first thing that was added to the home screen was the header that had the three letters of my abbreviated name across the top. This type of thing would be added again later in the project so it will be added to the components file of the src folder.
If you want to import a font from somewhere, make sure to import it into the index.css file and add the font-family as well
The second thing that was added to the home screen was the intro section which contained my name, a hook, and a short description about myself.
The third thing that was added to the home screen was the about section which would be the blueprint for other sections of the portfolio. (I added a lottiefiles animation to this section of the portfolio. The script was added to the index.html file and the lottie-player part was added to the project.)
A SectionTitle file was also added to the components page because it would be used in order to create the titles for the other sections

In the tailwindcss file, adding a screens section and creating parameters for screen sizes makes the screen look good on mobile devices

The resources folder with the experiences, projects, etc. was added so make the transition from vscode to mongodb easier

I then added a custom scroll bar into hte index.css file

The experience, projects, and contact section were then added.

I then added the leftsider to the portfolio. (The CDN link was added to index.html and the icon was added to the leftsider file)

I added a usestate to the App.js file when adding the loading animation to the project.

I added an animation for each letter to index.css

Now I have to initialize the backend of the portfolio and that is done by using **npm init** and we will get a package.json
Next I installed express.js for the routing in the backend, mongoose for database purposes, and dotenv for authorization purposes **npm install express mongoose dotenv**

I then added the server.js file outside of the client folder,

I then installed nodemon to project to automatically change something on the webpage if something in the code was changed **npm install nodemon**

I then connected the project to MongoDB by creating a database and click "Connect Using MongoDB Compass", copy the link and put in your password. Place the copied text into a .env file outside of the client folder

proxy needs to be added to the package.json file within the client folder. This will be the port of the server that the backend is running on.

I am installing axios, redux, and react redux in order to connect the front end to the backend. **npm install axios redux react-redux** You can see what redux and react-redux does in the documentation. this is downloaded in the client folder.

I am installing antd in order to make the admin panel for the portfolio
in the index.js file in the client folder of the project, we are adding antd by importing it using "import 'antd/dist/antd.min.css'"
