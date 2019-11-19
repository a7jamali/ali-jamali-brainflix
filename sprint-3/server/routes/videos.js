const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const PlayNextDir =
  "../../server/model/PlayNext.json";
let PlayNext = require(PlayNextDir);
const PlayNowDir =
  "../../server/model/PlayNow.json";
let PlayNow = require(PlayNowDir);
const Logger = require("../middleware/Logger");
const app = express();
const Helper = require("../middleware/Helper");
const uuid = require("uuid");

app.use(Logger);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
router.get("/", (req, res) => {
  res.json(PlayNext);
});

router.get("/:id", (req, res) => {
  const found = PlayNow.some(video => video.id === req.params.id);

  if (found) {
    res.json(PlayNow.filter(video => video.id === req.params.id));
  } else {
    res
      .json({ errorMessage: `Video not Found.` });
  }
});

router.post("/", (req, res) => {
  try {
    const newVideo = {
      id: uuid.v4(),
      title: req.body.title,
      channel: "NoOneEveryOne",
      image: req.body.image,
      description: req.body.describe,
      views: 000001,
      likes: 00000,
      duration: "11:11",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: new Date(),
      comments: [
        {
          name: "Micheal Lyons",
          comment:
            "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
          id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
          likes: 0,
          timestamp: 1545162149000
        },
        {
          name: "Gary Wong",
          comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
          id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
          likes: 0,
          timestamp: 1544595784046
        },
        {
          name: "Theodore Duncan",
          comment:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
          id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
          likes: 0,
          timestamp: 1542262984046
        }
      ]
    };

    const newVideoSide = {
      id: newVideo.id,
      title: req.body.title,
      channel: "NoOneEveryOne",
      description: req.body.describe,
      image: req.body.image
    };

    if (!newVideoSide.channel) {
      res
        .status(400)
        .json({ ErrorMessage: "Request Cannot Be Processed" });
    }

    PlayNow.push(newVideo);
    PlayNext.push(newVideoSide);
    Helper.writeJSONFile(PlayNextDir, PlayNext);
    Helper.writeJSONFile(PlayNowDir, PlayNow);
    res.redirect("/");
  } catch (error) {
    console.log("error", error);
  }
});
module.exports = router;
