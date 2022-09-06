const express = require('express');
const app = express();
const Joi = require('joi');

const courses = [
    { id: 1, name: 'course 1' },
    { id: 2, name: 'course 2' },
    { id: 3, name: 'course 3' },
    { id: 4, name: 'course 4' },
    { id: 5, name: 'course 5' },
    { id: 6, name: 'course 6' },
    { id: 7, name: 'course 7' }

]

app.get('/', (req, res) => {
    res.send('hello world')
});

app.get('/courses', (req, res) => {
    res.send(courses)
});

app.get('/courses/:id', (req, res) => {
    var course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('böyle bir id bulunamadı !')
    res.send(course)
})

app.post('/api/courses/post', (req, res) => {

/*     const schema = {
        name: Joi.string().min(3).require()
    };

    const result = Joi.validate(req.body, schema);
    console.log(result) */
  /*   if (!courses) {
        res.status(404).send("result.error");
        return;
    }
    var course = {
        id: courses.lenght + 1,
        name: req.body.name
    };
    courses.push(course); */
    console.log(req.params)
   

});



const port = process.env.PORT || 3000;
app.listen(port, () => console.log('listening on port 3000 ...'));