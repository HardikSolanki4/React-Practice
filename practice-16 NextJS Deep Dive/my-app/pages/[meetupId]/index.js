import MeetupDetails from '../../components/meetups/MeetupDetails';

function MeetupIdDetails(props) {
  return (
    <>
      <MeetupDetails
        img='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg'
        title='hello'
        address='address'
        desc='description'
      />
    </>
  );
}

export async function getStaticPaths() {
  return {
    // See the "paths" section below
    paths: [{ params: { meetupId: 'm1' } }, { params: { meetupId: 'm2' } }],
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupDetails: {
        id: meetupId,
        img: 'https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg',
        title: 'hello11',
        address: 'address',
        desc: 'description',
      },
    }, // will be passed to the page component as props
  };
}
export default MeetupIdDetails;
