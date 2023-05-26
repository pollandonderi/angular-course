

import * as express from 'express';
import {Application} from "express";
import {getAllCourses} from './server/get-courses.route';
import {saveCourse} from './server/save-course.route';


const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').put(saveCourse);



const httpServer = app.listen(9000, () => {
    const http = require('http');

const httpServer = http.createServer(app).listen(9000, () => {
    const serverAddress = httpServer.address();
    if (serverAddress && typeof serverAddress === 'object') {
        console.log("HTTP REST API Server running at http://localhost:" + serverAddress.port);
    }
});

});



