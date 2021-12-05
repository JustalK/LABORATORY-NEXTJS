/**
* The Users components
* I use this component for isr/ssg/ssr (not for csr).
* It simply uses the data received and show them with a listing
* @module pages/basic
*/

/**
* @function Users
* render the users
* @return {Object} The emails of the users in a list
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
