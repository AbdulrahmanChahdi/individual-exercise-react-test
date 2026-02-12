import CarCard from './CarCard';
import vehicles from '../../Data/Vehicle';

function DisplayCards() {
    return (
        <div className="cards-container">
            {vehicles.map((vehicle, index) => (
                <CarCard key={index} vehicle={vehicle} />
            ))}
        </div>
    );
}

export default DisplayCards;