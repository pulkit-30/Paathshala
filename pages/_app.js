import '../styles/globals.css';
import '../styles/styles.css';
import '../styles/utils.css';
import { SessionProvider } from 'next-auth/react';
import MainSidebar from '../components/sidebar/MainSidebar';
import MessageProvider from '../context/messages/MessageProvider';
import ResponsiveDialog from '../components/dialog/Dialog';

function MyApp({ Component, pageProps }) {
  return (
    <MessageProvider>
      <SessionProvider session={pageProps.session}>
        <ResponsiveDialog />
        <main
          className='flex'
          style={{
            alignItems: 'flex-start',
          }}
        >
          <section className={'main_sidebar'}>
            <MainSidebar />
          </section>
          <section className='main_content_section'>
            <Component {...pageProps} />
          </section>
        </main>
      </SessionProvider>
    </MessageProvider>
  );
}

export default MyApp;
