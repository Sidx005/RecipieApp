const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserSchema = require('./Schema'); // Assuming the schema file is named 'Schema.js'
const Blog = require('./BlogSchema');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const MongoURL = 'mongodb://localhost:27017/Register';
mongoose.connect(MongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connection successful'))
.catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('hello');
});

app.post('/users', async (req, res) => {
  const { name, email, password } = req.body;
  const existUser = await UserSchema.findOne({ email });

  if (existUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  try {
    const newUser = await UserSchema.create({ name, email, password });
    res.status(201).json({ message: 'success', user: newUser.name });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating user' });
  }
});

app.delete('/delete', async (req, res) => {
  const { email } = req.body;
  const Deleteuser = await UserSchema.findOneAndDelete({ email });
  if (Deleteuser) {
    res.status(204).json({ msg: 'Successfully deleted' });
  }
});

app.post('/Loginusers', async (req, res) => {
  const { email, password } = req.body;
  const findUser = await UserSchema.findOne({ email });
  if (findUser) {
    if (password === findUser.password) {
      const username = findUser.name;
      res.json({ message: 'Success', username });
    } else {
      res.status(401).json({ message: 'Incorrect password' });
    }
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.get('/UserData', async (req, res) => {
  const table = await UserSchema.find();
  res.json(table);
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post('/blogs', upload.single('file'), async (req, res) => {
  const { title, content, about } = req.body;
  const file = req.file.path;

  try {
    const blogs = new Blog({ title, content, about, file });
    await blogs.save();
    console.log(req.file);
    res.status(201).json({ message: 'Blogs posted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create blog post' });
  }
});

app.get('/getBlogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    console.error(err);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
