const express = require('express');
const app = express();

const example = 'send me to the client';

app.set('port', process.env.PORT || 3001);

// Only serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
}

app.get('/api/test', (req, res) => {
  res.send(example);
});

app.listen(app.get('port'), () => {
  console.log(`Server up at: http://localhost:${app.get('port')}/`);
});
