import Categories from "../models/categories.js";


class CategorieController{
    static async  create(request,response){
        const {libelle} = request.body;
        if (libelle){
            await Categories.createCat(request.body);
            response.json({message:"Categorie enregistrer avec succès !"})
        }else {
            response.json({message:"Ce champ est obligatoire pour effectuer l'opération !"})
        }
    }

    static async all(request,response){
        const user = await Categories.findAll();
        response.json(user);
    }

    static async update(request, response){
        const {libelle,id} = request.body;
        if (libelle) {
            await Categories.updateCategory(request.body);
            response.json({message:"Categorie enregistrer avec succès !"})
        }else {
            response.json({message:"Informations incomplet"})
        }
    }

    static async search(request,response){
        const {q} = request.body;
        if (q){
            const result = await Categories.searchCategorie(request.body);
            response.json(result);
        }else {
            response.json({message:"Aucun résultat trouvé"});
        }
    }
}

export default CategorieController;