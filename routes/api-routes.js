const router = require("express").Router();
const Workouts = require("../models/workouts.js");

router.get("/api/workouts", (req, res) => {
    // Workouts.aggregate(
    //     [
    //         {
    //             $totals: {
    //             totalDuration: {
    //                 $sum: "exercises.duration",
    //             }
    
    //             }
    //         }
            
    //     ]
    // )
    // .then((workout) => {
    //   res.json(workout);
    // })
    // .catch(err => {
    //   res.status(400).json(err);
    // });
    Workouts.find({}).then(stuff => res.json(stuff))
});

router.post("/api/workouts", (req, res) => {
    Workouts.create({})
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.put("/api/workouts/:id", (req, res) => {
  // try {
  //     console.log(req.body)
  //     const workout = await workout.findById(req.params.id)
  //     workout.exercises.push(req.body)
  //     await workout.save()
  //     res.status(200).json(workout)
  // }
  //   catch(err) {
  //     res.status(400).json(err);
  //   }
  Workouts.findByIdAndUpdate(
    req.params.id,
    {
      $push: { exercises: req.body }
    }
  ).then(updated => {
    res.json(updated)
  })
});

router.get("/api/workouts/range", (req, res) => {
// Workouts.aggregate(
//     [
//         {
//             $totals: {
//             totalDuration: {
//                 $sum: "exercises.duration",
//             }

//             }
//         }
        
//     ]
// )

//     .then(workout => {
//       res.json(workout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
    Workouts.find({}).then(stuff => res.json(stuff))
});

module.exports = router;