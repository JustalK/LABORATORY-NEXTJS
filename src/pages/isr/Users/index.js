/**
* The basic page
* @module pages/basic
*/

/**
* @function Basic
* render the basic page
* @return {Object} The html of the basic page
**/
const Users = ({ users }) => {
  return (
    <div>
      <ul>
      {users?.results?.map((user, index) => (
        <li key={index}>{user.email}</li>
      ))}
      </ul>
    </div>
  )
}

export default Users
