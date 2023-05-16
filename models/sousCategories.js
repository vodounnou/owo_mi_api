import database from "../config/db.js";

class SousCategories {
    static async createScat(data) {
        const values = [data.libelle, data.categorie];
        const insert = await database.query("INSERT INTO sous_categorie(libelle,id_cat)VALUES(?,?)", values);
    }

    static async findById(id) {
        const values = [id];
        const sous_categories = await database.query("SELECT * FROM sous_categorie WHERE id_scat=?", values);
        return sous_categories;
    }

    static async findByCat(catId) {
        const values = [catId];
        const sous_categories = await database.query("SELECT * FROM sous_categorie WHERE id_cat=?", values);
        return sous_categories;
    }
}

export default SousCategories;
