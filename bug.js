const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch the user ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  // ... some code to handle the user object ...
  res.send(user);
});

//The problem is that if the database query fails to fetch the user, the code will throw an error.  This is because the user variable will be undefined.
//Express.js does not handle this case automatically.