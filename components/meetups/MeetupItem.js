import classes from './MeetupItem.module.css';

function MeetupItem({ item }) {
	return (
		<div className={classes.card}>
			<h2>{item.title}</h2>
			<img src={item.image}/>
			<p>{item.description}</p>
			<address>{item.address}</address>
			<div class="text-center">
				<button class="btn btn-primary">Show Details</button>
			</div>
		</div>
	)
}

export default MeetupItem;
