import saveMeme from '../../../Components/common/layout/Utils/SaveMeme'
import './Buttons.css'

type ButtonsProps = {
  topFontSize: number
  bottomFontSize: number

  setTopFontSize: React.Dispatch<React.SetStateAction<number>>
  setBottomFontSize: React.Dispatch<React.SetStateAction<number>>

  setSelectedPage: (page: string) => void
}

const Buttons: React.FC<ButtonsProps> = ({
  topFontSize,
  bottomFontSize,
  setTopFontSize,
  setBottomFontSize,
  setSelectedPage,
}) => {
  return (
    <div className="buttons-container">
      <div className="slider-group">
        <label>
          Top Text Size: {topFontSize}px
        </label>

        <input
          type="range"
          min="10"
          max="100"
          value={topFontSize}
          onChange={(e) =>
            setTopFontSize(Number(e.target.value))
          }
        />
      </div>

      <div className="slider-group">
        <label>
          Bottom Text Size: {bottomFontSize}px
        </label>

        <input
          type="range"
          min="10"
          max="100"
          value={bottomFontSize}
          onChange={(e) =>
            setBottomFontSize(Number(e.target.value))
          }
        />
      </div>

      <div className="action-buttons">
        <button
          className="back-button"
          onClick={() => setSelectedPage('select')}
        >
          Back To Meme Select
        </button>

        <button
          className="download-button"
          onClick={saveMeme}
        >
          Download Meme
        </button>
      </div>
    </div>
  )
}

export default Buttons