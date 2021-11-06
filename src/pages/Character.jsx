import React from "react";
import { useCharacter } from "../hooks/useCharacter";

export default function Character() {
	const { data, error, loading } = useCharacter(2);

	console.log({ error, data, loading });

	if (loading) return <div>Loading ...</div>;
	if (error) return <div>Error...</div>;
	return (
		<div className="character">
			<img src={data.character.image} width={750} height={750} alt="" />
			<div className="character-content">
				<h1>{data.character.name}</h1>
				<p>{data.character.gender}</p>
				<div className="episode">
					{data.character.episode.map((ep) => {
						return (
							<div>
								{ep.name} - <b>{ep.episode}</b>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
