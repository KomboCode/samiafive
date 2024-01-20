const express = require('express');
const { 
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers');


const router = express.Router();

// get all the workouts
router.get('/', getWorkouts);

// get single workout
router.get('/:id', getWorkout);

// create a workout
router.post('/', createWorkout);

// delete a workout

router.delete('/:id', deleteWorkout);

//  update a workout

router.patch('/:id', updateWorkout);


module.exports = router;