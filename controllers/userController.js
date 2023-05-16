import Users from "../models/users.js";
import {hashpass} from "../utils/gen_id.js";
import jwt from "jsonwebtoken";
const SECRET = process.env.SECRET || 'owo2023';
class UsersController{
    static async register(request,response){
        const {nom,prenom,pays,email,date_naissance,sexe,mot_de_passe} = request.body;
        if (nom && prenom && pays && email && date_naissance && sexe && mot_de_passe){
            console.log(email);
            const user = await Users.findByEmail(email);
            if (!user) {
                await Users.register(request.body);
                response.json(await Users.findByEmail(email));
            }else{
                response.json({'error':"Désolé, cet email existe déjà !!"})
            }
        }else{
            response.status(400).json({'error':'Tous les champs sont obligatoires'});
        }
    }
    static async login(request,response){
        const {email,mot_de_passe} = request.body;
        if (email && mot_de_passe){
            const user = await Users.findByEmail(email);
            if (!user){
                return response.status(400).json({ message: 'L\'adresse e-mail ou le mot de passe est incorrect.' });
            }
            const hashedPassword = hashpass(mot_de_passe); // Hashage du mot de passe en SHA1
            if (user.mot_de_passe === hashedPassword){
                const token = jwt.sign({ id: user.id_user }, SECRET, { expiresIn: '8h' });
                
                response.json({token});
            }else{
                response.status(400).json({ message: 'L\'adresse e-mail ou le mot de passe est incorrect.' });
            }
        }else{
            response.status(400).json({'error':'Tous les champs sont obligatoires'});
        }
    }

    static async getProfile(request,response){
        const user = await Users.findById(request.user.id);
        response.json(user);
    }
    static async status(request,response){
        const user = await Users.findAllUsers();
        console.log(user);
        response.json(user);
    }
}

export default UsersController;