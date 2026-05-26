import React from 'react';

type Props = {
   setSelectedPage: (page: string) => void;
};

const HomePage: React.FC<Props> = ({ setSelectedPage }) => {
   return (
      <>
         <h2>Welcome to the Meme Generator!</h2>

         <button onClick={() => setSelectedPage("select")}>
            Create a Meme
         </button>
      </>
   );
};

export default HomePage;