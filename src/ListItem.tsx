import React from "react";

function List(props: { data: any; }) {
	const list = props.data;
	const listItems = list.map((item: any, index: any) =>
		<div>
			<p>{index + 1}. {item.expectAnswer}</p>
			<audio controls>
				<source src={item.audioLink} type="audio/mp3"/>
			</audio>
			<hr/>
		</div>
	);
	return (
		<div>{listItems}</div>
	);
}

export default List;