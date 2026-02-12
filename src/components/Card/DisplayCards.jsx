import { useState, useMemo } from 'react';
import CarCard from './CarCard';
import vehiclesData, { sortCar } from '../../Data/Vehicle';
import AddCarForm from '../Form/AddCarForm';

function DisplayCards() {

    const [vehicles, setVehicles] = useState(vehiclesData);
    const [ascending, setAscending] = useState(true);

    const sortedVehicles = useMemo(() => {
        return sortCar(vehicles, ascending);
    }, [vehicles,ascending]);
    const addVehicle = (newVehicle) => {
        setVehicles([...vehicles, newVehicle]);
    };

    return (
        <div>
            <div className="sort-buttons">
                <button
                    onClick={() => setAscending(true)}
                    className={ascending ? 'active' : ''}
                    aria-pressed={ascending}
                >
                    Prix croissant ↑
                </button>
                <button
                    onClick={() => setAscending(false)}
                    className={!ascending ? 'active' : ''}
                    aria-pressed={!ascending}
                >
                    Prix décroissant ↓
                </button>
            </div>
            {/* affiche le formulaire pour ajouter une nouvelle voiture */}
            <AddCarForm onAddVehicle={addVehicle} />
            {/* affiche les cartes de voitures triées en fonction du prix */}
            <div className="cards-container">
            {/* map à travers la liste triée des véhicules et rend une carte pour chaque véhicule */}
                {sortedVehicles.map((vehicle, index) => (
                    /* renvoie une carte de voiture pour chaque véhicule */
            <CarCard key={index} vehicle={vehicle} />                    
                ))}
            </div>
        </div>
    );
  
}

export default DisplayCards;