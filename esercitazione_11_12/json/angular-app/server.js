const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('dist/angular-app'));

app.listen(port, () => {
  console.log(`Server Angular in esecuzione su http://localhost:${port}`);
});