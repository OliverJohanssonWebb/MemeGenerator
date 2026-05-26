import "./MemeSelectPage.css";

type Props = {
   setSelectedPage: (page: string) => void;
   setSelectedMeme: (meme: string) => void;  
};

const MemeSelectPage = ({
  setSelectedPage,
  setSelectedMeme
}: Props) => {

  const handleSelect = (image: string) => {
    setSelectedMeme(image);
    setSelectedPage("style");
  };

  return (
    <>
<h1>Select a Meme</h1>

<img
  className="meme-image"
  src="MemeOne.webp"
  alt="Meme 1"
  onClick={() => handleSelect("MemeOne.webp")}
/>

<img
  className="meme-image"
  src="MemeTwo.webp"
  alt="Meme 2"
  onClick={() => handleSelect("MemeTwo.webp")}
/>

<img
  className="meme-image"
  src="MemeThree.jpg"
  alt="Meme 3"
  onClick={() => handleSelect("MemeThree.jpg")}
/>
    </>
  );
};

export default MemeSelectPage;