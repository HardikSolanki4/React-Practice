import axios from 'axios';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const newMeetup = () => {
  const router = useRouter();
  const addMeetupHandler = async (meetupData) => {
    // const response = await fetch('/api/new-meetup', {
    //   method: 'POST',
    //   body: JSON.stringify(meetupData),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // const data = await response.json();
    // console.log(data);
    // router.push('/');

    // Same Example with Axios
    axios
      .post('/api/new-meetup11', meetupData)
      .then((response) => {
        alert(response.data.message);
        router.push('/');
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  return (
    <Fragment>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default newMeetup;
