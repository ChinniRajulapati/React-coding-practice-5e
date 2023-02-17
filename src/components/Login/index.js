import './index.css'

const Login = props => {
  const {isChange} = props
  return (
    <button type="button" className="btn2" onClick={isChange}>
      Login
    </button>
  )
}
export default Login
