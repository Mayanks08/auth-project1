const app = require("./app.js"); 

const PORT = process.env.PORT || 5015;


app.listen(PORT, () => {
    console.log(`server is listening at http://localhost:${PORT}`)
});