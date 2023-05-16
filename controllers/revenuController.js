import Revenu from "../models/revenu.js";

class RevenuController {
    static async create(request, response) {
        const { montant, description, mois, annee, categorie, scategorie } = request.body;
        const id_user = request.user.id; // récupérer l'ID de l'utilisateur connecté
        console.log(id_user);
      
        if (montant && mois && annee) {
          await Revenu.create({ montant, description, mois, annee, id_user, categorie, scategorie });
          response.status(200).json({ message: "Revenu créé avec succès" });
        } else {
          response.status(400).json({ message: "Tous les champs sont obligatoires" });
        }
      }
      

    static async getById(request, response) {
        const id_rev = request.params.id;
        const id_user = request.user.id; 
        const revenu = await Revenu.findById(id_rev,id_user);
        console.log(revenu);

        if (revenu.length > 0) {
            response.status(200).json(revenu);
        } else {
            response.status(404).json({ message: "Revenu non trouvé" });
        }
    }

    static async getByUser(request, response) {
        const id_user = request.user.id;
        const revenus = await Revenu.findByUser(id_user);
        response.status(200).json(revenus);
        console.log(revenus);
    }

    static async getByCategory(request, response) {
        const id_user = request.user.id;
        const { categorie, scategorie } = request.query;
        const revenus = await Revenu.findByCategory(id_user, categorie, scategorie);
        response.status(200).json(revenus);
    }

    static async update(request, response) {
        const id = request.params.id;
        const id_user = request.user.id;
        const { montant, description, mois, annee, categorie, scategorie } = request.body;

        if (montant && description && mois && annee) {
            await Revenu.update(id,id_user, { montant, description, mois, annee, categorie, scategorie });
            response.status(200).json({ message: "Revenu modifié avec succès" });
        } else {
            response.status(400).json({ message: "Tous les champs sont obligatoires" });
        }
    }

    static async delete(request, response) {
        const id = request.params.id;
        const id_user = request.user.id;
        await Revenu.delete(id,id_user);
        response.status(200).json({ message: "Revenu supprimé avec succès" });
    }

    static async userTotal(request, response) {
        const id_user = request.user.id;
        const total = await Revenu.getTotal(id_user);
        response.status(200).json({ total });
    }

    async search(request, response, next) {
        try {
          const { id_user, search } = request.query;
          const revenus = await Revenu.search(id_user, search);
          response.status(200).json(revenus);
        } catch (err) {
          next(err);
        }
    }

}

export default RevenuController;
