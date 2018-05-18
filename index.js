const mongoose = require('mongoose');  // import mongoose

// connect to MongoDB
mongoose
  .connect('mongodb://localhost/mongo-test
  .then(() => console.log('Connected to MongoDB')
  .catch(err => console.error('Could not connect to MongoDB', err));
  
 // make Schema
 const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
      type: Date,
      default: Date.now
    },
    isPublished: Boolean
 )};
 
// make model
const Course = mongoose.model('Course', courseSchema);

// 'Create' Operation
async function createCourse() {
  const course = new Course ({
    name: 'React Course',
    author: 'Mr. J',
    tags: ['react', 'frontend'],
    isPublished: true
  });
  const result = await course.save();
  console.log(result);
}

// 'Get' Operation
async function getCourse() {
  const courses = await Course.find();
  console.log(courses);
}

getCourse();


 
