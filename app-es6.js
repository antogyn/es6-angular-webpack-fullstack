import express from 'express';
import routes from './app/routes';
import ejs from 'ejs';
import path from 'path';

const app = express();

routes(app);

app.set('views', path.join(__dirname, '/app/views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use('/dist/', express.static(path.resolve('./dist'), { maxAge: 1 }));

// to serve sources
if (process.env.NODE_ENV === 'development') {
  app.use('/public/', express.static(path.resolve('./public'), {maxAge: 1}));
}

app.listen(8080);

// Expose app
export default app;
