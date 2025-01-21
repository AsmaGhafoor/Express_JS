const express = require('express')
const app = express();
const path = require('path');
const port = 3000;

const staticPath = path.join(__dirname, '../public');
// builtin middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("<h1>Hello! This is Home Page</h1>");
    res.send();
})

app.get("/about", (req, res) => {
    res.send("This is About Page");
})

app.get("/contact", (req, res) => {
    res.send("This is Contact Page");
})

// app.get("/temp", (req, res) => {
//     res.send(
//         {
//             id: 1,
//             name: "asma",
//         },  
//         {
//             id: 2,
//             name: "asma g",
//         },
//         {
//             id: 3,
//             name: "asma ghafoor",
//         }
//     );
// })

app.get("/temp", (req, res) => {
    res.json(
        {
            id: 1,
            name: "asma",
        },
        {
            id: 2,
            name: "asma g",
        },
        {
            id: 3,
            name: "asma ghafoor",
        }
    );
})

app.listen(port, () => {
    console.log(`Listening the port at ${port}`)
})