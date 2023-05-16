import Depense from "../models/depense.js";

class DepenseController {
  static async create(request, response) {
    const { montant, description, mois, annee, categorie, scategorie } = request.body;
    const id_user = request.user.id; // récupérer l'ID de l'utilisateur connecté
      
    if (montant && mois && annee) {
      await Depense.create({ montant, description, mois, annee, id_user, categorie, scategorie });
      response.status(200).json({ message: "Dépense créée avec succès" });
    } else {
      response.status(400).json({ message: "Tous les champs sont obligatoires" });
    }
  }

  static async getById(request, response) {
    const id_dep = request.params.id;
    const id_user = request.user.id; 
    const depense = await Depense.findById(id_dep,id_user);

    if (depense.length > 0) {
      response.status(200).json(depense);
    } else {
      response.status(404).json({ message: "Dépense non trouvée" });
    }
  }

  static async getByUser(request, response) {
    const id_user = request.user.id;
    const depenses = await Depense.findByUser(id_user);
    response.status(200).json(depenses);
  }

  static async getByCategory(request, response) {
    const id_user = request.user.id;
    const { categorie, scategorie } = request.query;
    const depenses = await Depense.findByCategory(id_user, categorie, scategorie);
    response.status(200).json(depenses);
  }

  static async update(request, response) {
    const id = request.params.id;
    const id_user = request.user.id;
    const { montant, description, mois, annee, categorie, scategorie } = request.body;

    if (montant && description && mois && annee) {
      await Depense.update(id,id_user, { montant, description, mois, annee, categorie, scategorie });
      response.status(200).json({ message: "Dépense modifiée avec succès" });
    } else {
      response.status(400).json({ message: "Tous les champs sont obligatoires" });
    }
  }

  static async delete(request, response) {
    const id = request.params.id;
    const id_user = request.user.id;
    await Depense.delete(id,id_user);
    response.status(200).json({ message: "Dépense supprimée avec succès" });
  }

  static async userTotal(request, response) {
    const id_user = request.user.id;
    const total = await Depense.getTotal(id_user);
    response.status(200).json({ total });
  }

}

export default DepenseController;
