import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

export default function CharactersList() {
	// const obj = useQuery(GET_CHARACTERS)
	// obj.error , obj.loading, obj.data

	const { error, loading, data } = useCharacters();

	if (loading) return <div>Loading ...</div>;
	if (error) return <div>Error...</div>;
	return (
		<div className="character-list">
			{data.characters.results.map((character) => {
				return (
					<Link to={`/${character.id}`}>
						<img src={character.image} alt={character.image} />
						<h2>{character.name}</h2>
					</Link>
				);
			})}
		</div>
	);
}
