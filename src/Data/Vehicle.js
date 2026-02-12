const vehicles = [
	{
        marque: "Peugeot",
        modele: "208",
        annee:2022,
        prix:13500
	},
	{
        marque:"Renault",
        modele:"Clio",
        annee:2023,
        prix:12200
	},
    {
        marque:"Citroen",
        modele:"C3",
        annee:2009,
        prix:9900  
    },
    {
        marque:"Volkswagen",
        modele:"Golf",
        annee:1998,
        prix:14500
	},
	{
        marque:"Toyota",
        modele:"Yaris",
        annee:2022,
        prix:15900
	},
	{
        marque:"Porsche",
        modele:"Magnum",
        annee:2022,
        prix:34000
    },
    {
        marque:"Buggati",
        modele:"Chiron",
        annee:1989,
        prix:23000000
	},
    {
        marque:"Lamborghini",
        modele:"Countach",
        annee:1989,
        prix:800000
	}
];

export function sortCar(carList, ascending) {

        // trie la liste des voitures en fonction du prix
    return [...carList].sort((a, b) => {
        if (ascending) {
        // compare les prix des voitures pour trier en ordre croissant
            return a.prix - b.prix;
        } else {
        // compare les prix des voitures pour trier en ordre décroissant
            return b.prix - a.prix;
        }
    });
}

export default vehicles;
