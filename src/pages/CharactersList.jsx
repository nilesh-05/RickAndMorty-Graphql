import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
	query {
		characters {
			results {
				id
				name
				image
			}
		}
	}
`;

export default function CharactersList() {
	// const obj = useQuery(GET_CHARACTERS)
	// obj.error , obj.loading, obj.data

	const { error, loading, data } = useQuery(GET_CHARACTERS);
	console.table({ error, loading, data });

	if (loading) return <div>Loading ...</div>;
	if (error) return <div>Error...</div>;
	return (
		<div className="character-list">
			{data.characters.results.map((character) => {
				return (
					<div>
						<img src={character.image} alt={character.image} />
						<h2>{character.name}</h2>
					</div>
				);
			})}
		</div>
	);
}
