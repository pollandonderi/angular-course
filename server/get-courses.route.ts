import {Request, Response} from 'express';
import {COURSES} from '../src/db-data';


export function getAllCourses(req: Request, res: Response) {


    res.status(200).json({payload: Object.values(COURSES)});


}


export function getCourseById(req: Request, res: Response) {

    const courseId = req.params['id'];

    const courses: any = Object.values(COURSES);

    const course:any = courses.find(course => course.id == courseId);

    res.status(200).json(course);
}