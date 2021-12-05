/**
* The Users components for csr
* @module pages/csr/Users
*/
import useSWR from 'swr'
import { GET_USERS_ENDPOINT } from '@src/services/users'
import { fetcher } from '@src/services/fetcher'

/**
* @function Users
* Since, we are using the useSWR on a fallback SWRConfig, the data will always be available.
* For understanding this, you need to come back at the csr page. You will see that we get the data at build time and use those one as a fallback.
*
* What happen is, we use the data from the static page and we query new one with useSWR. While it is loading, we are using the one from the fallback.
* @return {Object} The html of the basic page
**/
const Users = () => {
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
