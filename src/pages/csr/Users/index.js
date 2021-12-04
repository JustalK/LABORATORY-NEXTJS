/**
* The basic page
* @module pages/basic
*/
import useSWR from 'swr'
import { GET_USERS_ENDPOINT } from '@src/services/users'
import { fetcher } from '@src/services/fetcher'

/**
* @function Basic
* render the basic page
* @return {Object} The html of the basic page
**/
const Users = () => {
  // `data` will always be available as it's in `fallback`.
  const { data } = useSWR(GET_USERS_ENDPOINT, fetcher)

  return (
    <div>
      <ul>
      {data?.results.map((user, index) => (
        <li key={index}>{user.email}</li>
      ))}
      </ul>
    </div>
  )
}

export default Users
