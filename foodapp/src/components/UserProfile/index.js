import './index.css'

const UserProfile = props => {
  
  const {userDetails1} = props
  const {imageUrl, name, role} = userDetails1

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
    </li>
  )
}
export default UserProfile


