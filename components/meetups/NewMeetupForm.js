import {useState} from 'react';
import classes from './MeetupForm.module.css';
import meetupData from '../../Data/meetupData.json';

function NewMeetupForm() {
	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const [address, setAddress] = useState('');
	const [des, setDes] = useState('');
	const [meetup, setMeetup] = useState([...meetupData])


		const addItem = (item) => {
			setMeetup([...meetup, item])
		}

	const handleSubmit= (e) => {
		e.preventDefault()
		const meetTitle = e.target.elements.title.value;
		const meetImg = e.target.elements.image.value;
		const meetAddress = e.target.elements.address.value
		const meetDes = e.target.elements.description.value

		const newMeetup = {
			// id: uuid(),
			title: meetTitle,
			image: meetImg,
			address: meetAddress,
			description: meetDes
		}
		addItem(newMeetup);
	}

	return (
		<div>
			<form className ={classes.form} onSubmit={ (e) => handleSubmit(e)}>
				<div class="form-group">
					<label>Meetup Title</label>
					<input type="text" class="form-control" name="title" value={name} onChange={(e) => setName(e.target.value)} />
				</div>
				<div class="form-group">
					<label>Meetup Image</label>
					<input type="text" class="form-control" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
				</div>
				<div class="form-group">
					<label>Address</label>
					<input type="text" class="form-control" name="address" value ={address} onChange ={(e) => setAddress(e.target.value)} />
				</div>
				<div class="form-group">
					<label>Description</label>
					<textarea className='form-control' name="description" rows='5' col='8' value={des} onChange={(e) => setDes(e.target.value)}></textarea>
				</div>
				<button type="submit" class="btn btn-primary">Add Meetup</button>
			</form>
		</div>
	)
}

export default NewMeetupForm;
