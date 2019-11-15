const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitness_users"
);

const exSeed = [
  {
    name: "Lateral Pulldowns",
    instructions: "Grab lat bar with wide parallel grip. With a straight back, pulldown cable bar to Upper chest. Return until arms and shoulders are fully extended ",
    demo: "https://media.giphy.com/media/htjIrAEcUMnFuM3fiW/giphy-downsized-large.gif",
    type: "Upper"
  },
  {
    name: "Pushups",
    instructions: "Lie prone on floor with hands slightly wider than shoulder width. Keeping body straight, Lower body to floor by bending arms. Push body up until arms are extended. Repeat.",
    demo: "https://media.giphy.com/media/xQKjS9xF023GU/200w_d.gif",
    type: "Upper"
  },
  {
    name: "Shoulder Press",
    instructions: "Hold a dumbbell in each hand at shoulder height with your palms facing away from you. Keep your chest up and your Core braced, and look straight forward throughout the movement. Press the weights directly upwards until your arms are straight and the weights are above your head.",
    demo: "https://media.giphy.com/media/RKSHFi9n5lN7MnPETu/giphy-downsized-large.gif",
    type: "Upper"
  },
  {
    name: "Bicep Curls",
    instructions: "Grasp the bar with an underhand grip and shoulder width apart. Keep the elbows to side, raise bar until forearms are vertical. Lower until arms are fully extended. Repeat. Movement can also be performed with a two dumbbells.",
    demo: "https://media.giphy.com/media/JOM6pvZagIE0Sg6zQ7/giphy.gif",
    type: "Upper"
  },
  {
    name: "Tricep Pulldowns",
    instructions: "With a rope attachment, keep the elbows to the side and palms facing in. Extend the arms down and turn palms down at the bottom. Return until forearm is close to Upper arm and hands are in original position. Repeat. Try using different cable attachments to target different areas of the tricep.",
    demo: "https://media.giphy.com/media/KGSym2SeAxRbcEE8TB/giphy-downsized-large.gif",
    type: "Upper"
  },
  {
    name: "Squats",
    instructions: "Keep head facing forward, back straight and weight evenly distributed through the forefoot and heel. Begin the descend by slowly pushing your hips out as if sitting on a chair. Knees should point in the same direction as feet throughout the movement. Lower yourself until you reach below parallel level. Squat up by extending knees and hips until legs are straight. Repeat. Master this movement and you can add barbells, kettlebells and other equipment for a challenge.",
    demo: "https://media.giphy.com/media/RjkgxKVkT4muibh1GT/giphy-downsized-large.gif",
    type: "Lower"
  },
  {
    name: "Leg Press",
    instructions: "Follow machine instructions. Be sure to keep the weight on your heels and on the platform at all times. Placing feet slightly higer on the platform emphasizes the Glutes.  ",
    demo: "https://media.giphy.com/media/gjlkdUGDDXnzGPtxqM/giphy-downsized-large.gif",
    type: "Lower"
  },
  {
    name: "Jump Squats",
    instructions: "Keep head facing forward, back straight and weight evenly distributed through the forefoot and heel. Begin the descend by slowly pushing your hips out as if sitting on a chair. Knees should point in the same direction as feet throughout the movement. Lower yourself until you reach below parallel level. Squat up by extending knees and hips until legs are straight. Immediately extend hips and knees to jump off the ground. Land and Lower body back into squat position. IF you have knee pain or a knee injury these should be approached with caution", 
    demo: "https://media.giphy.com/media/jUorCE4cIckV2WMmBy/giphy.gif",
    type: "Lower"
  },
  {
    name: "Backward Lunges",
    instructions: "Keep your weight on your heel. Take a big step back and Lower your hip until it is parallel to the ground. Keep your body upright as you descend and weight on the heel of the front leg. Hold on to two dumbbells for added resistance. ",
    demo: "https://media.giphy.com/media/iD5tzmEOEltjeRAR1L/giphy-downsized-large.gif",
    type: "Lower"
  },
  {
    name: "Romanian Deadlift",
    instructions: "Pull shoulders back and stand with legs hip width apart. This will allow you to keep your back straight as you Lower the bar. Extend knees at the top. Lower the bar until you reach slightly below the knees by bending the hips. Bend knees slightly during descent and keep waist straight, flexing only slightly at bottom. Repeat.",
    demo: "https://media.giphy.com/media/ehh4HQjYHXHA15g44F/giphy-downsized-large.gif",
    type: "Lower"
  },
  {
    name: "Planks",
    instructions: " Lie on the floor with your Upper body being supported by the forearms. Squeeze your glutes and tighten up your abdominals. Keep a straight line from head to toe. Most common mistake is raising your hips too high. Be sure to keep them leveled with the shoulders. ",
    demo: "https://media.giphy.com/media/XEb0R1IsBhsveImWJF/giphy.gif",
    type: "Core"
  },
  {
    name: "Cable Rotation",
    instructions: "Start with the handle at chest height and step away from the weight. Feet should be shoulder width apart. Twist from the hips and move the arms across the body achieving a full extension. Return to starting position and repeat on the other side of the body.  ",
    demo: "https://media.giphy.com/media/WqEkyjLEstW3pAO9gd/giphy-downsized-large.gif",
    type: "Core"
  },
  {
    name: "Situps",
    instructions: "Begin with your knees slightly bend and your arms by the side of your head. Raise your torso from the ground by bending at the hips. Return to the original position. For assistance, hook your feet under a footbrace or have a partner hold on to them. Another option would be to elevate your Upper body until Upper and mid back are off the ground.  ",
    demo: "https://media.giphy.com/media/JsIvkkdDfVyBkVCCCl/giphy.gif",
    type: "Core"
  },
  {
    name: "Russian Twist",
    instructions: "Lie down on the floor with your knees bent and feet flat on the ground. Lift your Upper body off the ground so that you form a v-shape. Rotate your torso with your feet elevated while holding on to a medicine ball or bodyweighted. If a modification is needed, keep your heels on the ground as you rotate.",
    demo: "https://media.giphy.com/media/iGLvnSOxeyE2qHL1Cp/giphy-downsized-large.gif",
    type: "Core"
  }


];

db.Exercises.remove({})
  .then(() => db.Exercises.collection.insertMany(exSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
