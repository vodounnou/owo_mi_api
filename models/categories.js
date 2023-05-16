import database from "../config/db.js";


class Categories{
    static async  findAll(){
        const categories = await database.query("SELECT * FROM categories");
        console.log(categories)
        return categories;
    }

    static async  createCat(data){
        const values = [data.libelle];
        const insert = await database.query("INSERT INTO categories(libelle_cat)VALUES(?)",values);
    }

    static async findById(id){
        const values = [id];
        const categories = await database.query("SELECT * FROM categories WHERE id_cat=?",values);
        return categories;
    }

    static async updateCategory(id,data){
        const values = [ data.libelle,id];
        const update = await database.query("UPDATE categories SET libelle=? WHERE id_cat=?",values);
        return update;
    }

    static async searchCategorie(data){
        const values = [data];
        const search = await database.query("SELECT * FROM categories WHERE libelle LIKE '%values%' OR id_cat=?",values);
        return search;
    }
}

export default Categories;