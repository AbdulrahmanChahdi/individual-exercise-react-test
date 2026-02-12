import { useState } from 'react';

function AddCarForm({ onAddVehicle }) {

    // Déclare les états pour les champs du formulaire
    const [marque, setMarque] = useState('');
    const [modele, setModele] = useState('');
    const [annee, setAnnee] = useState('');
    const [prix, setPrix] = useState('');

    // soumission du form
    const handleSubmit = (e) => {
        e.preventDefault();
        //création d'un nouvel objet à partir des données du formulaire
        const newCar = {
            marque: marque,
            modele: modele,
            annee: Number(annee),
            prix: Number(prix)
        };
        // appel la fonction pour ajouter le nouveau véhivule à la liste de véhicule
        onAddVehicle(newCar);

    // réinitialise les champs du formulaire après la soumission        
        setMarque('');
        setModele('');
        setAnnee('');
        setPrix('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={marque}
                onChange={(e) => setMarque(e.target.value)}
                placeholder="Marque"
            />
            <input
                value={modele}
                onChange={(e) => setModele(e.target.value)}
                placeholder="Modèle"
            />
            <input
                value={annee}
                onChange={(e) => setAnnee(e.target.value)}
                placeholder="Année"
                type="number"
            />
            <input
                value={prix}
                onChange={(e) => setPrix(e.target.value)}
                placeholder="Prix"
                type="number"
            />
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default AddCarForm;