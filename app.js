import express from 'express';
import cors from 'cors';
import authRoute from './routes/user.js';
import categorieRoute from './routes/categorie.js';
import scatRoute from './routes/sous_categorie.js';
import revRoute from './routes/revenu.js';
import depRoute from './routes/depense.js';


const app = express();
app.use(express.json());
app.use(cors());
app.use(authRoute);
app.use(categorieRoute);
app.use(scatRoute);
app.use(revRoute);
app.use(depRoute);


const port = 5000;
app.listen(port,()=>{
    console.log(`Serveur http://localhost:${port} en cours`);
});