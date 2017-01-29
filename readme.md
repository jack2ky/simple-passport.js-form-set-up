## Show set up for passport
##Set up for an express app with mongo connection using mongoose.

###In this example you can send data to the server from a form in the browser and save it to the database

`http://localhost:3000/` link to forms.
`http://localhost:3000/signUp` is where you insert data to create a user to save the database
`http://localhost:3000/login` is where you login and where passport takes over.

`http://localhost:3000/unProtected` this route doesn't have a req.isAuthenticated() check. So it will display user info but anybody can see the info

`http://localhost:3000/protected` This does have `req.isAuthenticated()` so if the user **does not** have a session.passport stuff it will not be able to see it.

on successful login. req.session will have passport property that contains a user id.

I beleive that the user id stored in the session because of `passport.serializeUser`
```
passport.serializeUser(function(user, done) {
    done(null, user.id);
                 |
});
```

after post login you will have the user from the database attached to the request Object
```
res.status(201).json({
    user : user,
    session : req.session,
    "req.user" :  req.user
});
```

If you leave out req.login() in `passport.authenticate` you will not have a req.user or passport property in `session`

```
 req.login(user, function(err) {
   if(err) console.log(err);
 });
```

It contains a public directory to display css

EJS for templates

a views folder to display the ejs templates

and a mongoose connection (It should be changed to your database)

This repo is meant to be be a simple starting file for an express project

do npm install

Tutorial:
http://walidhosseini.com/journal/2014/10/18/passport-local-strategy-auth.html
