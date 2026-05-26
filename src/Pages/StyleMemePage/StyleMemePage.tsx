import Buttons from '../TextModifiers/Buttons/Buttons'
import { useState } from 'react'
import { Rnd } from 'react-rnd'

const StyleMemePage = ({ selectedMeme }: { selectedMeme: string }) => {
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')

  const [topFontSize, setTopFontSize] = useState(32)
  const [bottomFontSize, setBottomFontSize] = useState(32)

  return (
    <>
      <h1>Style Meme</h1>

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
      />

      <div className="meme-container">
        <img src={selectedMeme} alt="Selected Meme" />

        <Rnd default={{ x: 100, y: 20, width: 200, height: 50 }}>
          <p style={{ fontSize: topFontSize }}>
            {topText}
          </p>
        </Rnd>

        <Rnd default={{ x: 100, y: 300, width: 200, height: 50 }}>
          <p style={{ fontSize: bottomFontSize }}>
            {bottomText}
          </p>
        </Rnd>
      </div>
    </>
  )
}

export default StyleMemePage