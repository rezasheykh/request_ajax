const express = require('express');
const cors = require('cors')
const { json } = require('express/lib/response');
const path = require('path')
const { string } = require('joi');
const Joi = require('joi');
const route = require('./routes')
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors())
app.options("*", cors())


app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/products/:id', function(req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})


const books = [{
        id: 1,
        name: 'book 1'
    },
    {
        id: 2,
        name: 'book 2'
    }
]

const Categories = [

    {
        "categoryId": 1,
        "categoryName": "ssvsing",
        "description": "strivsdvsvsdvng"
    },
    {
        "categoryId": 2,
        "categoryName": "rasol",
        "description": "eeee"
    },
    {
        "categoryId": 3,
        "categoryName": "mahdi",
        "description": "s"
    },
    {
        "categoryId": 4,
        "categoryName": "hadi",
        "description": "fast"
    },
    {
        "categoryId": 5,
        "categoryName": "cup",
        "description": "Breads, crackers, pasta, and cereal"
    },
    {
        "categoryId": 6,
        "categoryName": "Meat/Poultry",
        "description": "Prepared meats"
    },
    {
        "categoryId": 7,
        "categoryName": "Produce",
        "description": "Dried fruit and bean curd"
    },
    {
        "categoryId": 8,
        "categoryName": "ice55555",
        "description": "ice44444"
    },
    {
        "categoryId": 9,
        "categoryName": "test6",
        "description": "test"
    }
]
app.locals.appdata = require('./public/data')
app.get('/', route.getRoot)
    // app.get('/' ,(req, res) => {
    //     res.send('hello')
    // })

// app.get('Categories', route.getApiCategories)
app.get('/api/Categories', (req, res) => {
    console.log(Categories)
    res.send(Categories)

})
app.get('/api/Categories/:id', (req, res) => {
    const category = Categories.find(x => x.id === parseInt(req.params.id))
    if (!category) {
        res.status(404).send('category not found')
    }
    res.send(category)
})
app.post('/api/Categories', (req, res) => {
    const schema = Joi.object({
        categoryName: Joi.string().min(3).required(),
        description: Joi.string().min(5).required()

    });

    const result = schema.validate(req.body)
    console.log(result);
    if (result.error) {
        return res.status(400).send(result.error.details[0].message)
    }

    // console.log(req.body);
    // if (!req.body || !req.body.name) {
    //     return res.status(404).send('name must be defined')
    // }
    const category = {
        categoryId: Categories.length + 1,
        categoryName: req.body.categoryName,
        description: req.body.description
    }
    Categories.push(category)
    res.send(category)
})

app.put('/api/Categries/:id', (req, res) => {
    console.log(req.body);
    //find category
    let num = req.params
    console.log(num);
    const category = Categories.find(x => x.categoryId === parseInt(num.id))
        //if not exists return status 404
    if (!category) {
        return res.status(404).send('category not found')
    }

    //validate with Joi
    //1-made a schema 

    // const schema = Joi.object({
    // categoryName: Joi.string().min(3).required(),
    // description: Joi.string().min(5).required
    // })
    //2-validate input
    // const result = schema.validate(req.body)
    // console.log(result);
    //if not validate send error   
    // if (result.error) {
    //     return res.status(400).send(result.error.details[0].message)
    // // }
    //update
    //1-Change the previous property to the new one

    // category.categoryName = req.body.categoryName;
    // category.description = req.body.description;
    res.send(category)

})
app.delete('/api/Categories/:id', (req, res) => {
    let num = req.params;
    console.log(num);
    const category = Categories.find(x => x.categoryId === parseInt(num.id))
    if (!category) {
        return res.status(404).send('category not found')
    }
    if (category) {
        const index = Categories.indexOf(category)
        Categories.splice(index, 1)
        res.send(`category: ${category.categoryName} delete now`)
    }
})
app.get('*', route.getAny)
    // app.get('*', (req, res) => {
    //     res.send(`<h2 style="text-align:center"> 404 Page Not Found </h2>`)
    // })
app.listen(3000, () => {
    console.log(`Start Listening on port ${port}`);
})