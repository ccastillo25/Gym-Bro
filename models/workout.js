const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { 
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String
      },
      name: {
        type: String
      },
      duration: {
        type: Number
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
},
{
  toJSON: {
    virtuals: true
  }
}
);

workoutSchema.virtual('totalDuration').get(function(){
  //combine total duration of workouts.4
  return this.exercises.reduce ((totalDuration, exercises)=>{
    return totalDuration+exercises.duration
  },0)
})
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;