const path = require('path'),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 3016;
app.listen(port, () => {
   console.log(`Production server is listening on port ${port}`);
});
app.get('/', (req, res) => {
    let path1 = path.resolve(__dirname, 'dist', 'index.html');
    res.sendFile(path1);
});
app.use(express.static(path.resolve(__dirname, 'dist')));
