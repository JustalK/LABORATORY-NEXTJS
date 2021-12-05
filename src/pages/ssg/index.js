/**
* The ssg page
* This page will be build on the server side at build time.
* The page will never be rebuilt.
* @module pages/ssg
*/
import Users from '@src/components/Users'
import { fetcher } from '@src/services/fetcher'
import { GET_USERS_ENDPOINT } from '@src/services/users'
/**
* @function getStaticProps
* Get the users at build time, this function is executed on the server side.
* Pay attention to the missing revalidate argument compared to the isr.
* @return {Users[]} 10 random users from the API
**/

export async function getStaticProps () {
  const users = await fetcher(GET_USERS_ENDPOINT)
  return {
    props: {
      users
    }
  }
}

/**
* @function Ssg
* render a static site generation page
* @return {Object} The html of the ssg page
**/
const Ssg = ({ users }) => {
  return (
    <>
      <h1>Static site generation</h1>
      <span>This page has been rendered at build time and will always give the same version how many time you try to reload the page.</span>
      <Users users={users} />
    </>
  )
}

export default Ssg
