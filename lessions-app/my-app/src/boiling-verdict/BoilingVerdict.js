
function BoilingVerdict(props) {
    if(props.celsius >= 100) {
      return (
          <p>Вода кипит!</p>
      )
    } else {
      return (
          <p>Вода не закипит</p>
      )
    }
  }
  
  export default BoilingVerdict;