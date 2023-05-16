import database from "../config/db.js";
import sql from 'sql-template-strings';
import {generateId, generateUniqueCode, hashpass} from "../utils/gen_id.js";


class Users {
    static async findAllUsers(){
        const users = await database.query(`SELECT * FROM users`);
        console.log(users);
        return users;
    }
    static async register(user){
        const id_user = generateId();
        const password = hashpass(user.mot_de_passe);
        const confirmCode = generateUniqueCode();
        const values = [id_user, user.nom, user.prenom, user.pays, user.email, user.date_naissance, user.sexe, password,confirmCode];
        const insert = await database.query(`INSERT INTO users(id_user,nom,prenom,pays,email,date_naissance,sexe,mot_de_passe,confirm_key)VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)`,values);
    }

    static async findByEmail(email){
        const values = [email];
        const [users] = await database.query(`SELECT * FROM users WHERE email=?`,values);
        console.log(users);
        return users;
    }

    static async findById(id){
        const values = [id];
        const [users] = await database.query(
            `SELECT * FROM users WHERE id_user=?`,
            values
        );
        console.log(users);
        return users;
    }

    
}

export default Users;