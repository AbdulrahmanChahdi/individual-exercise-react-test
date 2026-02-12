function CarCard({ vehicle }) {
    return (
        <div className="car-card">
            <h3>{vehicle.marque} {vehicle.modele}</h3>
            <p>Année : {vehicle.annee}</p>
            <p className="price">{vehicle.prix.toLocaleString()} €</p>
        </div>
    );
}

export default CarCard;