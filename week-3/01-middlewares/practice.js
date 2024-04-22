const express = require('express');

const zod=require('zod');
const app = express();
app.use(express.json());

Myinput=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8),
});


app.get('/user', function(req, res) {
    let x=req.body.list.toarray();
    console.log(typeof x);
    console.log(x.value());
    let ans=Myinput.safeParse({list:x});
    res.status(200).send({ans})
}
);

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
});





