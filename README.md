## Angular/Node Project

This project is a revised copy of the one created by the [Yeoman](http://yeoman.io/ "Yeoman") [Angular Fullstack](https://github.com/angular-fullstack/generator-angular-fullstack "Angular Fullstack") generator. I've modified that project just a bit, so that the generated code looks more like what you see in the DSpace client example that we'll look at on Friday.

Your assignment is to modify the code so that it loads a new page of your own devising.  The page should meet the following minimum requirements:

1. You should be able to navigate to this page via a unique url (e.g.: http://localhost:9000/mypage.html).
2. The page should include a basic user interaction managed via an AngularJs client controller.
3. The page should retrieve a message via the server-side API. 

I've partially fulfilled the requirements in my sample page with a button.

You need to modify/create the following files:

1. Modify server/routes.js 
2  Create a new server api controller 
3. Modify client/app.js (You'll need to define a new Angular route, or state).
4. Create new client html file for your page
5. Create new AngularJs controller for your page

I've added comments in the files you need to revise (and in a few other places).  Look for `-ms` at the end of the comment to know that it's written by me.

To get started on this project, clone the github repo to your machine, move into the project directory and install dependencies using `npm install` and `bower install`.

To run the project on your computer, type `grunt serve`.   Happy coding.


