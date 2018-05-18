const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/mongo-test')
  .then(() => console.log('Connected to MongoDB'))
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

// 1. Get all the published backend courses,
// 2. sort them by their name,
// 3. pick only their name and author,
// 4. and finally, display them

async function getCourse(){
  return await Course
    .find({ isPublished: true, tags: 'backend' }) // 1
    .sort({ name: 1 }) // 2 (1 => ascending, -1 => descending)
    .select({ name: 1, author: 1 }); // 3
}

async function run() {
  const courses = await getCourse();
  console.log(courses);
}

run(); // 4
