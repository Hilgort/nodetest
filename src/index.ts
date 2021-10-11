import express from "express";
const app = express();

app.disable("x-powered-by");

const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.get( "/test", ( req, res ) => {
   res.send( "Hello world test!" );
} );

// start the Express server
app.listen( port, () => {

   // tslint:disable-next-line:no-console
   console.log( `server started at http://localhost:${ port }` );
} );
