
type ButtonsProps = {
  topFontSize: number
  bottomFontSize: number

  setTopFontSize: React.Dispatch<React.SetStateAction<number>>
  setBottomFontSize: React.Dispatch<React.SetStateAction<number>>
}

const Buttons: React.FC<ButtonsProps> = ({
  topFontSize,
  bottomFontSize,
  setTopFontSize,
  setBottomFontSize,
}) => {
  return (
    <>
      <div>
        <label>Top Text Size: {topFontSize}px</label>

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

      <div>
        <label>Bottom Text Size: {bottomFontSize}px</label>

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
    </>
  )
}

export default Buttons