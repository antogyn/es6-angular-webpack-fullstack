import express from 'express';
import routes from './app/routes';
import ejs from 'ejs';
import path from 'path';

const app = express();

routes(app);

app.set('views', './app/views');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use('/dist/', express.static('./dist'));

// to serve sources
if (process.env.NODE_ENV === 'development') {
  app.use('/public/', express.static('./public'));
  app.use('/shared', express.static('./shared'));
  app.use('/legacy_modules/', express.static('./legacy_modules'));
}

app.listen(8080);

// Expose app
export default app;
