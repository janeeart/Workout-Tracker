const router = require("express").Router();
const Workout = require("../models/workouts.js");

router.get("/api/workouts", (req, res) => {
    Workouts.aggregate(
        [
            {
                $totals: {
                totalDuration: {
                    $sum: "exercises.duration",
                }
    
                }
            }
            
        ]
    )
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
    Transaction.insertMany(body)
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.put("/api/workouts/:id", async (req, res) => {
  try {
      console.log(req.body)
      const workout = await workout.findById(req.params.id)
      workout.exercises.push(req.body)
      await workout.save()
      res.status(200).json(workout)
  }
    catch(err) {
      res.status(400).json(err);
    }
    });

router.get("/api/workouts/range", (req, res) => {
Workouts.aggregate(
    [
        {
            $totals: {
            totalDuration: {
                $sum: "exercises.duration",
            }

            }
        }
        
    ]
)

    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;