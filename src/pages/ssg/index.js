/**
* The ssg page
* @module pages/ssg
*/
import Users from '@src/pages/ssg/Users'
import { fetcher } from '@src/services/fetcher'
import { GET_USERS_ENDPOINT } from '@src/services/users'
/**
* @function getStaticProps
* Get all the pages at build time
* @return {Post[]} All the pages in the database
**/

export async function getStaticProps () {
  // `getStaticProps` is executed on the server side.
  const users = await fetcher(GET_USERS_ENDPOINT)
  return {
    props: {
      users
    }
  }
}

/**
* @function Basic
* render a static page (SSG : Static site generation)
* @return {Object} The html of the basic page
**/
const Ssg = ({ users }) => {
  return (
    <>
      <h1>Static site generation</h1>
      <span>This page has been rendered at build time and will always give the same version how many time your reload the page.</span>
      <Users users={users} />
    </>
  )
}

export default Ssg
