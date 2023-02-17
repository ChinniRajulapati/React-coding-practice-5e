import './index.css'

const Logout = props => {
  const {isChange} = props
  return (
    <button type="button" className="btn1" onClick={isChange}>
      Logout
    </button>
  )
}
export default Logout
