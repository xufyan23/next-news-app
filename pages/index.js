import MeetupList from '../components/meetups/MeetupList';
import { useState } from 'react';
import meetupData from '../Data/meetupData.json';
import { useSelector, useDispatch } from "react-redux";
function Home () {
  const [item, setItem] = useState([...meetupData]);
  const addMeetup = useSelector((state) => state.appReducer.meetData);
  console.log(addMeetup)
  const dispatch = useDispatch();

  return (
    <>
      <MeetupList meetup={addMeetup}/>
    </>
  );
}

export default Home;
