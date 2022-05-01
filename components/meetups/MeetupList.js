import MeetupItem from "../meetups/MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList({ meetup }) {
	return (
		<div class={classes.list_block} >
			{
				meetup?.map( item => (
					<MeetupItem item={item} />
				))
			}
		</div>
	)
}

export default MeetupList;
