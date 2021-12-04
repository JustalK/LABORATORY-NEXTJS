/**
* The ssg page
* @module pages/ssg
*/
import Users from '@src/pages/ssr/Users'
import { fetcher } from '@src/services/fetcher'
import { GET_USERS_ENDPOINT } from '@src/services/users'
/**
* @function getStaticProps
* Get all the pages at build time
* @return {Post[]} All the pages in the database
**/

export async function getServerSideProps () {
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
      <h1>Server Side Rendering</h1>
      <span>This page will be build at every request with new fresh data evertyime. You can try to reload the page multiple time.</span>
      <Users users={users} />
    </>
  )
}

export default Ssg
