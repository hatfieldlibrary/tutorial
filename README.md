## Angular/Node Project

This project was created by the [Yeoman](http://yeoman.io/ "Yeoman") [Angular Fullstack](https://github.com/angular-fullstack/generator-angular-fullstack "Angular Fullstack") generator. I've modified the project just a bit to make the generated code look more like what you see in the DSpace client project. We'll look at that project on Friday.

Your assignment is to modify the code so that it loads a new page of your own devising.  The page should meet the following minimum requirements:

1. You should be able to navigate to this page via a unique url (e.g.: http://localhost:9000/mypage).
2. The new page should include some basic user interaction and it's own AngularJs controller.
3. The new page should retrieve data via the server-side API. 

I've partially fulfilled the requirements in my exquisite sample page with a button!

Along the way, you need to modify/create the following files:

1. Modify server/routes.js 
2.  Create a new server api controller 
3. Modify client/app.js (You'll need to define a new Angular route, or state).
4. Create new client html file for your page
5. Create new AngularJs controller for your page

I've added comments in several of the files you will revise (and in a few other places).  Look for `-ms` at the end of the comment to know that it's written by me.

To get started on this project, clone the github repo to your machine, move into the project directory and install dependencies using `npm install` and `bower install`.  If he chooses to join the fun, Christopher will also likely need to install node, npm and bower .

To run the project on your computer, type `grunt serve`.   Happy coding.


