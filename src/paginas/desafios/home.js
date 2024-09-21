import { useEffect, useState} from "react";
import {Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchPokemons = async () => {
        try {
        // Fetch list of Pokémon
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150'); // Ajuste o limite conforme necessário
        const data = await response.json();
        const pokemonList = data.results;

        // Fetch detailed information for each Pokémon
        const pokemonDetailsPromises = pokemonList.map(pokemon =>
            fetch(pokemon.url).then(res => res.json())
        );
        const pokemonDetails = await Promise.all(pokemonDetailsPromises);

        const detailedPokemons = pokemonDetails.map(pokemon => ({
            name: pokemon.name,
            image: pokemon.sprites.front_default,
            experience: pokemon.base_experience,
        }));

        // Sort Pokémon by name
        detailedPokemons.sort((a, b) => a.name.localeCompare(b.name));

        setPokemons(detailedPokemons);
        } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        } finally {
        setLoading(false);
        }
    };

    fetchPokemons();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        
        <div>
            <Row>
            {pokemons.map((pokemon) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={pokemon.image} alt={pokemon.name} />
                        <Card.Body>
                            <Card.Title>{pokemon.name}</Card.Title>
                            <Card.Text>
                                {pokemon.experience}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
            ))}
            </Row>
        </div>
        
    );
}