const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={text}> {text} </button>
  )
}

export default Button