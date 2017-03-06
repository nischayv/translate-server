const express = require('express');
const router = express.Router();

//Routes go here

module.exports = router;


// Example endpoint

router.post('/api/process', function(req, res) {
  console.log('posted');
  const visionClient = Vision({
    projectId: 'translate-160601'
  });

  visionClient.detectText(req.body.image)
    .then((results) => {
      const detections = results[0];

      console.log('Text:');
      detections.forEach((text) => console.log(text));
    });
});
