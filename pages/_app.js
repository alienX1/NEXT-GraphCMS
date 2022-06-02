import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewPost from '../components/NewPost';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <NewPost />
      <Footer />
    </>
  );
};

export default MyApp;
