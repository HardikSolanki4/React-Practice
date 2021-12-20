import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    image:
      'https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg',
    title: 'First meetup',
    address: 'Rajkot',
  },
  {
    id: 'm2',
    image:
      'https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg',
    title: 'Second meetup',
    address: 'Ahmadabad',
  },
];

const Home = () => {
  return (
    <>
      <MeetupList meetups={DUMMY_DATA} />
    </>
  );
};

export default Home;
