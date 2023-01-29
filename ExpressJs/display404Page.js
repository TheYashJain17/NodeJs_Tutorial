//Lets see how to render a 404 page , if the user enter wrong URL then this page  will gonna show up as we have seen in many websites.
//We make 404 Page to show error when user try to access the page which doesnt exist thats why we show Error404 page not found.

const express = require('express');
const path = require('path');

const app = express();

const filePath = path.join(__dirname, "HTML Files"); //Joining the current path with the path where our files are kept which we want to render.

app.get('/', (req, res) => {

    res.sendFile(`${filePath}/index.html`); //Whenever we want to render a page we always use sendFile instead of normal send.

})

app.get('/about', (req, res) => {

    res.sendFile(`${filePath}/about.html`)

})

app.get('*', (req, res) => {    //In Routes section just add star(*) this means thr URL which is not included in our system comes under star and in that case 404 page will be shown.

    res.sendFile(`${filePath}/404Page.html`);

})

app.listen(80);

//All the process is same as we have learnt before using sendFile so that dont have to use extension and all things are same using app.get and res.send , just using * in place of routes so that we can include all the non existent URL's Routes inside it.
//This is how we display 404 Error page for all wrong URLs/Routes.