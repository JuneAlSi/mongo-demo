// 1 Get all the published frontend and backend course,
// 2 sort them by their price in a descending order,
// 3 pick only their name and author,
// 4 and displya them

const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/mongo-test')
  .then(() => console.log('Connected to MongoDB')
  .catch(err => console.error('Could not connect to MongoDB', err);
  
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: Date,
  isPublished: Boolean,
  price: Number
)};

const Course = mongoose.model('Course', courseSchema);

async function getCourse({
  return await Course
    .find({ isPublished: true }) // 1
    .or([ { tags: 'frontend' }, { tags: 'backend' } ]) // 1
    .sort('-price') // 2 (descending) // 2
    .select('name author price'); // 3
}

async function run() {
  const courses = await getCourse();
  console.log(courses);
}

run(); // 4
