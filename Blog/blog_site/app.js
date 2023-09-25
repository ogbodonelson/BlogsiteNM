// Requiring express as it automatically creates our server for us
const express = require('express');

// for objectid
const { ObjectId } = require('mongodb')

// invoking express function()
const app = express();

const fs = require('fs');

// importing my connected db here from db.js to start using
const { connectdb, getdb } = require('./db');

// Middlewares
app.use(express.static('public'));
// app.use('public', express.static('public'));
// app.use(express.static(__dirname + '/public/images'));

// to enable our server understand incoming data
app.use(express.json());

app.use(express.urlencoded({extended:true}));

// for ejs
app.set('view engine', 'ejs');

// database connection
let db;


// Node.js example using the Express framework and the Multer middleware for handling file uploads
const multer = require('multer');
const { render } = require('ejs');
const { join } = require('path');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
    // cb(null,Date.now()+path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

// calling on the imported connectdb  and getdb functions
connectdb((err)=>{
    if(!err){
        // server starts to listen for request from the client computer
        app.listen(3000, ()=>{
        console.log('i have listened');
        });

        db = getdb();
    }
})


let which;
app.post('/2woc', upload.array('img', 3), (req, res) => {
  const data = {
          status: 'uploaded successfully',
          body : req.body,
          file : req.files
      }
      console.log(data.status)
      which = req.body.aspect[0]; 
      if(req.body.aspect[0] == "gaming" || req.body.aspect[0] == "GAMING"){
        db.collection('gaming').insertOne(data);
      res.send(data).status(204);
      }else if(req.body.aspect[0] == "programming" || req.body.aspect[0] == "PROGRAMMING"){
        db.collection('programming').insertOne(data);
        res.send(data).status(204);
      }else if(req.body.aspect[0] == "cars" || req.body.aspect[0] == "CARS"){
        db.collection('cars').insertOne(data);
        res.send(data).status(204);
      }else if(req.body.aspect[0] == "computers" || req.body.aspect[0] == "COMPUTERS"){
        db.collection('computers').insertOne(data);
        res.send(data).status(204);
      }else if(req.body.aspect[0] == "robotics" || req.body.aspect[0] == "ROBOTICS"){
        db.collection('robotics').insertOne(data);
        res.send(data).status(204);
      }else{
        db.collection('random').insertOne(data);
        res.send(data).status(204);
      }
}); 

let what;
function dell(what, res){
  db.collection(what)
  .find().toArray()
  .then((response)=>{
    res.send(response);
  })
  .catch((err)=>{console.log(err)})
}


app.post('/admind', (req, res)=>{
  what = req.body.aspect;
  dell(what, res);
});


app.get('/2woc', (req, res)=>{
  // res.sendFile('./views/admin.ejs', {root : __dirname});
  res.render('admin');
});



let imgone, imgtwo, imgthree;
let title1, title2, title3;
let pid1, pid2, pid3;
let imgo, imgt, imgth;
let tit, ti, t;
let gid1, gid2, gid3;
let imgon, imgtw, imgthr;
let tit1, t2, t3;
let comid1, comid2, comid3;
let imone, imtwo, imthree;
let titone, tittwo, titthree;
let carsid1, carsid2, carsid3;
let imon, imt, imgthre, tione, titwo, tithree;
let ranid1, ranid2, ranid3;
let im1, im2, im3;
let ti1, ti2, ti3;
let robid1, robid2, robid3;
let datep1, datep2, datep3;
let dateg1, dateg2, dateg3;
let datecomp1, datecomp2, datecomp3;
let datecars1, datecars2, datecars3;
let daterand1, daterand2, daterand3;
let daterob1, daterob2, daterob3;
app.get('/', (req, res)=>{
  db.collection('programming').find().toArray()
  .then((response)=>{
    // console.log(response.length);
    let arrlength = response.length;
    lenone = arrlength - 1;
    lentwo = arrlength - 2;
    lenthree = arrlength - 3;
    imgone = response[lenone].file[0].filename;
    imgtwo = response[lentwo].file[0].filename;
    imgthree = response[lenthree].file[0].filename;
    title1 = response[lenone].body.title[0];
    title2 = response[lentwo].body.title[0];
    title3 = response[lenthree].body.title[0];
    pid1 = response[lenone]._id;
    pid2 = response[lentwo]._id;
    pid3 = response[lenthree]._id;
    datep1 = response[lenone].body.date;
    datep2 = response[lentwo].body.date;
    datep3 = response[lenthree].body.date;
    // datep = response.body.date;
    // console.log(datep);
  })
  .catch((err)=>{console.log(err)})

  db.collection('gaming').find().toArray()
  .then((response)=>{
    // console.log(response.length);
    let arrlength = response.length;
    lenone = arrlength - 1;
    lentwo = arrlength - 2;
    lenthree = arrlength - 3;
    imgo= response[lenone].file[0].filename;
    imgt = response[lentwo].file[0].filename;
    imgth = response[lenthree].file[0].filename;
    tit = response[lenone].body.title[0];
    ti = response[lentwo].body.title[0];
    t = response[lenthree].body.title[0];
    gid1 = response[lenone]._id;
    gid2 = response[lentwo]._id;
    gid3 = response[lenthree]._id;
    dateg1 = response[lenone].body.date;
    dateg2 = response[lentwo].body.date;
    dateg3 = response[lenthree].body.date;
  })
  .catch((err)=>{console.log(err)})

  db.collection('computers').find().toArray()
  .then((response)=>{
    // console.log(response.length);
    let arrlength = response.length;
    lenone = arrlength - 1;
    lentwo = arrlength - 2;
    lenthree = arrlength - 3;
    imgon= response[lenone].file[0].filename;
    imgtw = response[lentwo].file[0].filename;
    imgthr = response[lenthree].file[0].filename;
    tit1 = response[lenone].body.title[0];
    t2 = response[lentwo].body.title[0];
    t3 = response[lenthree].body.title[0];
    comid1 = response[lenone]._id;
    comid2 = response[lentwo]._id;
    comid3 = response[lenthree]._id;
    datecomp1 = response[lenone].body.date;
    datecomp2 = response[lentwo].body.date;
    datecomp3 = response[lenthree].body.date;
  })
  .catch((err)=>{console.log(err)})
  
  db.collection('cars').find().toArray()
  .then((response)=>{
    // console.log(response.length);
    let arrlength = response.length;
    lenone = arrlength - 1;
    lentwo = arrlength - 2;
    lenthree = arrlength - 3;
    imone= response[lenone].file[0].filename;
    imtwo = response[lentwo].file[0].filename;
    imthree = response[lenthree].file[0].filename;
    titone = response[lenone].body.title[0];
    tittwo = response[lentwo].body.title[0];
    titthree = response[lenthree].body.title[0];
    carsid1 = response[lenone]._id;
    carsid2 = response[lentwo]._id;
    carsid3 = response[lenthree]._id;
    datecars1 = response[lenone].body.date;
    datecars2 = response[lentwo].body.date;
    datecars3 = response[lenthree].body.date;
  })
  .catch((err)=>{console.log(err)})

  db.collection('random').find().toArray()
  .then((response)=>{
    // console.log(response.length);
    let arrlength = response.length;
    lenone = arrlength - 1;
    lentwo = arrlength - 2;
    lenthree = arrlength - 3;
    im1= response[lenone].file[0].filename;
    im2 = response[lentwo].file[0].filename;
    im3 = response[lenthree].file[0].filename;
    ti1 = response[lenone].body.title[0];
    ti2 = response[lentwo].body.title[0];
    ti3 = response[lenthree].body.title[0];
    ranid1 = response[lenone]._id;
    ranid2 = response[lentwo]._id;
    ranid3 = response[lenthree]._id;
    daterand1 = response[lenone].body.date;
    daterand2 = response[lentwo].body.date;
    daterand3 = response[lenthree].body.date;
  })
  .catch((err)=>{console.log(err)})

  db.collection('robotics').find().toArray()
  .then((response)=>{
    // console.log(response.length);
    let arrlength = response.length;
    lenone = arrlength - 1;
    lentwo = arrlength - 2;
    lenthree = arrlength - 3;
    imon= response[lenone].file[0].filename;
    imt = response[lentwo].file[0].filename;
    imgthre = response[lenthree].file[0].filename;
    tione = response[lenone].body.title[0];
    titwo = response[lentwo].body.title[0];
    tithree = response[lenthree].body.title[0];
    robid1 = response[lenone]._id;
    robid2 = response[lentwo]._id;
    robid3 = response[lenthree]._id;
    daterob1 = response[lenone].body.date;
    daterob2 = response[lentwo].body.date;
    daterob3 = response[lenthree].body.date;
  })
  .catch((err)=>{console.log(err)})
  res.render('index', {imgone, imgtwo, imgthree, title1, title2, title3, pid1, pid2, pid3, datep1, datep2, datep3, imgo, imgt, imgth, tit, ti, t, gid1, gid2, gid3, dateg1, dateg2, dateg3, imgon, imgtw, imgthr, tit1, t2, t3, comid1, comid2, comid3, datecomp1, datecomp2, datecomp3, imone, imtwo, imthree, titone, tittwo, titthree, carsid1, carsid2, carsid3, daterand1, datecars1, datecars2, datecars3, im1, im2, im3, ti1, ti2, ti3, ranid1, ranid2, ranid3, daterand2, daterand3, imon, imt, imgthre, tione, titwo, tithree, robid1, robid2, robid3, daterob1, daterob2, daterob3});
})

// Function For Getting Each Blog
function eachblog(blog, res){
  db.collection(blog)
    .find().toArray()
    .then((response)=>{
      res.render(blog, {response})
    })
    .catch((err)=>{console.log(err)});
}

app.get('/programming', (req, res)=>{
  eachblog('programming', res);
})

app.get('/gaming', (req, res)=>{
  eachblog('gaming', res);
})

app.get('/cars', (req, res)=>{
  eachblog('cars', res);
})

app.get('/computers', (req, res)=>{
  eachblog('computers', res);
})

app.get('/robotics', (req, res)=>{
  eachblog('robotics', res);
})

app.get('/random', (req, res)=>{
  eachblog('random', res);
})


app.get('/programming/programming', (req, res)=>{
  res.redirect('/programming');
})

app.get('/programming/gaming', (req, res)=>{
  res.redirect('/gaming');
})

app.get('/programming/computers', (req, res)=>{
  res.redirect('/computers');
})

app.get('/programming/cars', (req, res)=>{
  res.redirect('/cars');
})

app.get('/programming/robotics', (req, res)=>{
  res.redirect('/robotics');
})

app.get('/programming/random', (req, res)=>{
  res.redirect('/random');
})
app.get('/programming/programming', (req, res)=>{
  res.redirect('/programming');
})

app.get('/programming/gaming', (req, res)=>{
  res.redirect('/gaming');
})

app.get('/programming/computers', (req, res)=>{
  res.redirect('/computers');
})

app.get('/programming/cars', (req, res)=>{
  res.redirect('/cars');
})

app.get('/programming/robotics', (req, res)=>{
  res.redirect('/robotics');
})

app.get('/programming/random', (req, res)=>{
  res.redirect('/random');
})
app.get('/gaming/programming', (req, res)=>{
  res.redirect('/programming');
})

app.get('/gaming/gaming', (req, res)=>{
  res.redirect('/gaming');
})

app.get('/gaming/computers', (req, res)=>{
  res.redirect('/computers');
})

app.get('/gaming/cars', (req, res)=>{
  res.redirect('/cars');
})

app.get('/gaming/robotics', (req, res)=>{
  res.redirect('/robotics');
})

app.get('/gaming/random', (req, res)=>{
  res.redirect('/random');
})
app.get('/cars/programming', (req, res)=>{
  res.redirect('/programming');
})

app.get('/cars/gaming', (req, res)=>{
  res.redirect('/gaming');
})

app.get('/cars/computers', (req, res)=>{
  res.redirect('/computers');
})

app.get('/cars/cars', (req, res)=>{
  res.redirect('/cars');
})

app.get('/cars/robotics', (req, res)=>{
  res.redirect('/robotics');
})

app.get('/cars/random', (req, res)=>{
  res.redirect('/random');
})
app.get('/computers/programming', (req, res)=>{
  res.redirect('/programming');
})

app.get('/computers/gaming', (req, res)=>{
  res.redirect('/gaming');
})

app.get('/computers/computers', (req, res)=>{
  res.redirect('/computers');
})

app.get('/computers/cars', (req, res)=>{
  res.redirect('/cars');
})

app.get('/computers/robotics', (req, res)=>{
  res.redirect('/robotics');
})

app.get('/computers/random', (req, res)=>{
  res.redirect('/random');
})
app.get('/robotics/programming', (req, res)=>{
  res.redirect('/programming');
})

app.get('/robotics/gaming', (req, res)=>{
  res.redirect('/gaming');
})

app.get('/robotics/computers', (req, res)=>{
  res.redirect('/computers');
})

app.get('/robotics/cars', (req, res)=>{
  res.redirect('/cars');
})

app.get('/robotics/robotics', (req, res)=>{
  res.redirect('/robotics');
})

app.get('/robotics/random', (req, res)=>{
  res.redirect('/random');
})


app.get('/random/programming', (req, res)=>{
  res.redirect('/programming');
})

app.get('/random/gaming', (req, res)=>{
  res.redirect('/gaming');
})

app.get('/random/computers', (req, res)=>{
  res.redirect('/computers');
})

app.get('/random/cars', (req, res)=>{
  res.redirect('/cars');
})

app.get('/random/robotics', (req, res)=>{
  res.redirect('/robotics');
})

app.get('/random/random', (req, res)=>{
  res.redirect('/random');
})

let u = [];
app.get('/programming/:id', (req, res)=>{
  const blog_id = new ObjectId(req.params.id)
  db.collection('programming')
  .findOne({_id: blog_id})
  .then((doc)=>{
    let title = doc.body.title[0];
    let writeup1 = doc.body.write[0];
    let writeup2 = doc.body.write[1];
    let pimg1 = doc.file[0].filename;
    let pimg2 = doc.file[1].filename;
    let pimg3 = doc.file[2].filename;
    res.render('rat', {title, writeup1, writeup2, pimg1, pimg2, pimg3})
  })
  .catch(err => {
    console.log(err);
  })
})

app.get('/gaming/:id', (req, res)=>{
  const blog_id = new ObjectId(req.params.id)
  db.collection('gaming')
  .findOne({_id: blog_id})
  .then((doc)=>{
    let title = doc.body.title[0];
    let writeup1 = doc.body.write[0];
    let writeup2 = doc.body.write[1];
    let pimg1 = doc.file[0].filename;
    let pimg2 = doc.file[1].filename;
    let pimg3 = doc.file[2].filename;
    res.render('rat', {title, writeup1, writeup2, pimg1, pimg2, pimg3})
  })
  .catch(err => {
    console.log(err);
  })
})

app.get('/cars/:id', (req, res)=>{
  const blog_id = new ObjectId(req.params.id)
  db.collection('cars')
  .findOne({_id: blog_id})
  .then((doc)=>{
    let title = doc.body.title[0];
    let writeup1 = doc.body.write[0];
    let writeup2 = doc.body.write[1];
    let pimg1 = doc.file[0].filename;
    let pimg2 = doc.file[1].filename;
    let pimg3 = doc.file[2].filename;
    res.render('rat', {title, writeup1, writeup2, pimg1, pimg2, pimg3})
  })
  .catch(err => {
    console.log(err);
  })
})

app.get('/computers/:id', (req, res)=>{
  const blog_id = new ObjectId(req.params.id)
  db.collection('computers')
  .findOne({_id: blog_id})
  .then((doc)=>{
    let title = doc.body.title[0];
    let writeup1 = doc.body.write[0];
    let writeup2 = doc.body.write[1];
    let pimg1 = doc.file[0].filename;
    let pimg2 = doc.file[1].filename;
    let pimg3 = doc.file[2].filename;
    res.render('rat', {title, writeup1, writeup2, pimg1, pimg2, pimg3})
  })
  .catch(err => {
    console.log(err);
  })
})

app.get('/robotics/:id', (req, res)=>{
  const blog_id = new ObjectId(req.params.id)
  db.collection('robotics')
  .findOne({_id: blog_id})
  .then((doc)=>{
    let title = doc.body.title[0];
    let writeup1 = doc.body.write[0];
    let writeup2 = doc.body.write[1];
    let pimg1 = doc.file[0].filename;
    let pimg2 = doc.file[1].filename;
    let pimg3 = doc.file[2].filename;
    res.render('rat', {title, writeup1, writeup2, pimg1, pimg2, pimg3})
  })
  .catch(err => {
    console.log(err);
  })
})

app.get('/random/:id', (req, res)=>{
  const blog_id = new ObjectId(req.params.id)
  db.collection('random')
  .findOne({_id: blog_id})
  .then((doc)=>{
    let title = doc.body.title[0];
    let writeup1 = doc.body.write[0];
    let writeup2 = doc.body.write[1];
    let pimg1 = doc.file[0].filename;
    let pimg2 = doc.file[1].filename;
    let pimg3 = doc.file[2].filename;
    res.render('rat', {title, writeup1, writeup2, pimg1, pimg2, pimg3})
  })
  .catch(err => {
    console.log(err);
  })
})

app.delete('/programming/:id', (req, res)=>{
  const blog_id = new ObjectId(req.params.id)
  // console.log(blog_id);
  db.collection(what)
  .deleteOne({"_id": blog_id})
  .then((result)=>{
  })
  .catch(err => {
    console.log(err);
  })
})