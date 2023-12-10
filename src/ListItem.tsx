import React from "react";

function ListItem(props: { data: any; }) {
	const list = props.data.sort(function(a,b){
		return new Date(b.createdDate) - new Date(a.createdDate);
	  });
	const listItems = list.map((item: any, key: any) =>
		<div key={key}>
			<p>{key + 1}. {item.answer}</p>
			<audio id={key} controls style={{height: "20px"}} onEnded={() => handleAudioEnded(key)}>
				<source src={item.audioLink} type="audio/mp3"/>
			</audio>
			<small>Date: {item.createdDate}</small>
			<textarea rows={2} cols={50}/>
			<hr/>
		</div>
	);
	return (listItems);
}

// function downloadAudio(list: []) {
// 	list.forEach((item: any) => {
// 		var l: any = document.querySelector("a");
// 		l.href = item.audioLink;
// 		l.download = item.audioLink.split('\\').pop().split('/').pop();
// 		l.click();
// 	});
// }

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