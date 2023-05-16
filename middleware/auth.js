import jwt from 'jsonwebtoken';

const SECRET = process.env.SECRET || 'owo2023';

function auth(request, response, next){
  try {
    const token = request.headers.authorization.split(' ')[1];
    const decodeToken = jwt.verify(token, SECRET);
    request.user = { id: decodeToken.id }; // stocker l'ID de l'utilisateur dans request.user.id
    console.log(token);
    console.log(request.user);
    console.log(decodeToken);
    next();
  } catch (error) {
    response.status(400).json({ error: 'Authentification failed' }).end();
  }
};

export default auth;
