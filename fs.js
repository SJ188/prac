const express = require('express')
const app = express()
app.get('/index.html',(req,res)=>
{
    res.send('<p>First name' +req.query['f_name']+ '</p><p>last name:' +req.query['l_name']+ '</p>')

})

app.listen(5000,(err)=>
{
    console.log("listen at 5000")
})
