const express = require("express");
const app = express();
const graphqlHttp = require("express-graphql");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.listen(port, () => console.log(`Listening on port ${port}`));
