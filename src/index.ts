import express from "express";
import * as sw from "swagger-ui-express";
const a = require('../swagger-output.json');
const app = express();

app.disable("x-powered-by");
app.use('/api/docs', sw.serve, sw.setup(a))
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
   const bool = 4;
   if(bool === 4){
      console.log("bool is 4");
   }
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
