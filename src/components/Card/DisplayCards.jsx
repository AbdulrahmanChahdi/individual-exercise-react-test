import { useState, useMemo } from 'react';
import CarCard from './CarCard';
import vehicles, { sortCar } from '../../Data/Vehicle';

function DisplayCards() {

    const [ascending, setAscending] = useState(true);

    const sortedVehicles = useMemo(() => {
        return sortCar(vehicles, ascending);
    }, [ascending]);

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
            {/* affiche les cartes de voitures triées en fonction du prix */}
            <div className="cards-container">
                {/* map à travers la liste triée des véhicules et rend une carte pour chaque véhicule */}
                {sortedVehicles.map((vehicle, index) => (
                    /* renvoie une carte de voiture pour chaque véhicule */
                    <CarCard key={vehicle.id ?? JSON.stringify(vehicle)} vehicle={vehicle} />
                ))}
            </div>
        </div>
    );
}

export default DisplayCards;