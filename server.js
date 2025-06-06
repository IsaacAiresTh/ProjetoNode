import express from 'express';

const app = express();
app.use(express.json());



const users = [];

app.post('/users', (req, res)=>{

  users.push(req.body);

  res.send('User created');

});


app.get('/users', (req, res) => {
  res.json(users);
}
);

app.listen(8080);

//user { isaacairesbarros , o4YJ41SCBX6n489O }


