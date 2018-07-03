const express = require("express");
const path = require("path");

const complements = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

const insults = [
    "You suck.",
    "That dress does NOT look nice on you",
    "Jeez, when was the last time you worked out?"
]

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomElement(complements)
    })
    .end();
});

app.get("/insult", function(req, res) {
    res.json({
        insult: getRandomElement(insults)
    })
    .end();
})

app.use("/public", express.static("./public")); // allow the server to use all the files in the public folder.

app.listen(3000);
console.log("listening on http://localhost:3000");