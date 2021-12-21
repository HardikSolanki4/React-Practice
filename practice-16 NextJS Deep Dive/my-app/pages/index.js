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

const Home = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// INFO: SSR: Server Site Render
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // console.log('req', req);
//   // fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_DATA,
//     },
//   };
// }

// INFO: SSG: Static Site Generation
export async function getStaticProps() {
  // fetch data from API
  return {
    props: {
      meetups: DUMMY_DATA,
    },
  };
}

export default Home;
