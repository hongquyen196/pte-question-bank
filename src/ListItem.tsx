import React from "react";

function ListItem(props: { data: any; }) {
	const list = props.data;
	const listItems = list.map((item: any, key: any) =>
		<div key={key}>
			<p>{key + 1}. {item.expectAnswer}</p>
			<audio id={key} controls style={{height: "20px"}} onEnded={() => handleAudioEnded(key)}>
				<source src={item.audioLink} type="audio/mp3"/>
			</audio>
			<textarea rows={2} cols={50}/>
			<hr/>
		</div>
	);
	return (listItems);
}

function handleAudioEnded(key: any) {
	let id = key + 1;
	setTimeout(() => {
		let elementById: any = document.getElementById(id);
		if (elementById) {
			elementById.scrollIntoView();
			elementById.play();
		}
	}, 3000);
}

export default ListItem;