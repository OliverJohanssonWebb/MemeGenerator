import Buttons from '../TextModifiers/Buttons/Buttons'
import { useState } from 'react'
import { Rnd } from 'react-rnd'
import './StyleMemePage.css'

type StyleMemePageProps = {
  selectedMeme: string
  setSelectedPage: (page: string) => void
}

const StyleMemePage: React.FC<StyleMemePageProps> = ({
  selectedMeme,
  setSelectedPage,
}) => {
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')

  const [topFontSize, setTopFontSize] = useState(32)
  const [bottomFontSize, setBottomFontSize] = useState(32)

  return (
    <>
      <h1>Style Meme And drag text</h1>

      <input
        value={topText}
        placeholder="Top Text"
        onChange={(e) => setTopText(e.target.value)}
      />

      <input
        value={bottomText}
        placeholder="Bottom Text"
        onChange={(e) => setBottomText(e.target.value)}
      />

      <Buttons
        topFontSize={topFontSize}
        bottomFontSize={bottomFontSize}
        setTopFontSize={setTopFontSize}
        setBottomFontSize={setBottomFontSize}
        setSelectedPage={setSelectedPage}
      />

      <div className="meme">
        <img
          className="meme-image"
          src={selectedMeme}
          alt="Selected Meme"
          crossOrigin="anonymous"
        />

        <Rnd
          default={{
            x: 100,
            y: 20,
            width: 200,
            height: 50,
          }}
          enableResizing={false}
        >
          <p
            className="meme-text"
            style={{ fontSize: `${topFontSize}px` }}
          >
            {topText}
          </p>
        </Rnd>

        <Rnd
          default={{
            x: 100,
            y: 200,
            width: 200,
            height: 50,
          }}
          enableResizing={false}
        >
          <p
            className="meme-text"
            style={{ fontSize: `${bottomFontSize}px` }}
          >
            {bottomText}
          </p>
        </Rnd>
      </div>
    </>
  )
}

export default StyleMemePage