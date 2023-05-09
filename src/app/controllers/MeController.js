const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../ultil/mongoose');

class MeController {
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/stored-courses', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
