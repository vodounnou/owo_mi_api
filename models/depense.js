import database from "../config/db.js";

class Depense {
  static async create(data) {
    const values = [data.montant,data.description,data.mois,data.annee,data.id_user,data.categorie,data.scategorie];
    const insert = await database.query("INSERT INTO depense(montant,description,mois,annee,id_user,categorie,scategorie) VALUES (?,?,?,?,?,?,?)",values);
  }

  static async findById(id_dep, id_user) {
    const values = [id_dep, id_user];
    const depenses = await database.query("SELECT * FROM depense WHERE id_dep=? AND id_user=?",values);
    return depenses;
  }

  static async findByUser(id_user) {
    const values = [id_user];
    const depenses = await database.query("SELECT * FROM depense WHERE id_user=?",values);
    return depenses;
  }

  static async findByCategory(id_user, categorie) {
    const values = [id_user, categorie];
    const depenses = await database.query("SELECT * FROM depense WHERE id_user=? AND categorie=?",values);
    return depenses;
  }

  static async update(id, id_user, data) {
    const values = [data.montant,data.description,data.mois,data.annee,id,id_user];
    const update = await database.query("UPDATE depense SET montant=?, description=?, mois=?, annee=? WHERE id_dep=? AND id_user=?",values);
    return update;
  }

  static async delete(id, id_user) {
    const values = [id, id_user];
    const del = await database.query("DELETE FROM depense WHERE id_dep=? AND id_user=?",values);
    return del;
  }

  static async getTotal(id_user) {
    const values = [id_user];
    const depenses = await database.query("SELECT SUM(montant) as total_depense FROM depense WHERE id_user=?",values);
    return depenses[0].total_depense;
  }
  static async search(id_user, search) {
    const values = [`%${search}%`, id_user];
    const revenus = await database.query("SELECT * FROM depense WHERE categorie LIKE ? OR scategorie LIKE ? OR description LIKE ? AND id_user=?", values);
    return revenus;
}
}

export default Depense;
