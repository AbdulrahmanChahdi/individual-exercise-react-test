function AddCarForm({ onAddVehicle }) {


    const handleSubmit = (e) => {
        e.preventDefault();

        const newCar = {
            marque: marque,
            modele: modele,
            annee: annee,  
prix: prix }; onAddVehicle(newCar); setMarque(''); }; }