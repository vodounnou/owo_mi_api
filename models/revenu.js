import database from "../config/db.js";

class Revenu {
    static async create(data) {
        const values = [data.montant, data.description, data.mois, data.annee, data.id_user, data.categorie, data.scategorie];
        const insert = await database.query("INSERT INTO revenu(montant,description,mois,annee,id_user,categorie,scategorie)VALUES(?,?,?,?,?,?,?)", values);
    }

    static async findById(id_rev,id_user) {
        const values = [id_rev,id_user];
        const revenus = await database.query("SELECT * FROM revenu WHERE id_rev=? AND id_user=?", values);
        return revenus;
    }

    static async findByUser(id_user) {
        const values = [id_user];
        const revenus = await database.query("SELECT * FROM revenu WHERE id_user=?", values);
        return revenus;
    }

    static async findByCategory(id_user, categorie) {
        const values = [id_user, categorie];
        const revenus = await database.query("SELECT * FROM revenu WHERE id_user=? AND categorie=?", values);
        return revenus;
    }

    static async update(id,id_user, data) {
        const values = [data.montant, data.description, data.mois, data.annee, id,id_user];
        const update = await database.query(
            "UPDATE revenu SET montant=?, description=?, mois=?, annee=? WHERE id_rev=? AND id_user=?",
            values
        );
        return update;
    }

    static async delete(id,id_user) {
        const values = [id,id_user];
        const del = await database.query("DELETE FROM revenu WHERE id_rev=? AND id_user=?", values);
        return del;
    }

    static async getTotal(id_user) {
        const values = [id_user];
        const revenus = await database.query("SELECT SUM(montant) as total_revenu FROM revenu WHERE id_user=?", values);
        return revenus[0].total_revenu;
    }

    static async search(id_user, search) {
        const values = [`%${search}%`, id_user];
        const revenus = await database.query("SELECT * FROM revenu WHERE categorie LIKE ? OR scategorie LIKE ? OR description LIKE ? AND id_user=?", values);
        return revenus;
    }
      
}

export default Revenu;
