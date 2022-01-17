// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//     res.send('hello');
// });

// app.get('/me', (req, res) => {
//     res.send('<h1>hello</h>');
// });

// app.get('/who/:name?', function(req, res) {
//     console.log(req.params.name);
//     if (req.params.name) {
//         var name = req.params.name
//     } else {
//         return res.send(`Ali was here...`)
//     }
//     res.send(`${name}</br>hello`)
// });

// app.get('/who/:name?/:title', function(req, res) {
//     let name = req.params.name
//     let title = req.params.title
//     res.send(`name: ${name}:</br>title: ${title}`)
// });
// app.get('*', (req, res) => {
//     res.send(`<h2 style="text-align:center"> 404 Page Not Found </h2>`)
// })

// const server = app.listen(3000, () => {
//     console.log('server listening in port 3000');
// })
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('get')
        //  {
        // title: 'yyyyy'
        // });
});

app.get('/me', (req, res) => {
    res.send('<h1>hello</h>');
});

app.get('/who/:name?', function(req, res) {
    console.log(req.params.name);
    if (req.params.name) {
        var name = req.params.name
    } else {
        return res.send(`Ali was here...`)
    }
    res.send(`${name}</br>hello`)
});

app.get('/who/:name?/:title', function(req, res) {
    let name = req.params.name
    let title = req.params.title
    res.send(`name: ${name}:</br>title: ${title}`)
});
app.get('*', (req, res) => {
    res.send(`<h2 style="text-align:center"> 404 Page Not Found </h2>`)
})

const server = app.listen(3000, () => {
    console.log('server listening in port 3000');
})