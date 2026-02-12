function CarCard({ vehicle }) {
    return (
        <div className="car-card">

        {/* affiche les détails de chaque voiture en utilisant les données passées en tant que props qui proviennent de vehicle.js */}
            <h3>{vehicle.marque} {vehicle.modele}</h3>
            <p>Année : {vehicle.annee}</p>
            <p className="price">{vehicle.prix.toLocaleString()} €</p>
        </div>
    );
}

export default CarCard;