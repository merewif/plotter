import {type NextPage} from 'next';
import {signIn, signOut, useSession} from 'next-auth/react';

import {trpc} from '../utils/trpc';

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({text: 'from tRPC'});

  return (
    <div className="mx-auto">
      Hi there. I will help you organize and systematize the elements of your novel. Please choose a
      module below.
    </div>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const {data: sessionData} = useSession();

//   const {data: secretMessage} = trpc.auth.getSecretMessage.useQuery(
//     undefined, // no input
//     {enabled: sessionData?.user !== undefined},
//   );

//   return (
//     <div className={styles.authContainer}>
//       <p className={styles.showcaseText}>
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className={styles.loginButton}
//         onClick={sessionData ? () => signOut() : () => signIn()}
//       >
//         {sessionData ? 'Sign out' : 'Sign in'}
//       </button>
//     </div>
//   );
// };
