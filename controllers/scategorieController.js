import SousCategories from "../models/sousCategories.js";

class ScategorieController {
    static async create(request, response) {
        const { libelle, categorie } = request.body;
        if (libelle && categorie) {
            await SousCategories.createScat(request.body);
            response.status(200).json({ message: "Sous-categorie enregistrée avec succès !" });
        } else {
            response.status(400).json({ message: "Tous les champs sont obligatoires pour effectuer l'opération !" });
        }
    }

    static async findByCategorie(request, response) {
        const { categorie } = request.params;
        const sous_categories = await SousCategories.findByCategorie(categorie);
        response.json(sous_categories);
    }
}

export default ScategorieController;
