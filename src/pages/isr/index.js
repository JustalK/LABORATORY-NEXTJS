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
    },
    revalidate: 10
  }
}

/**
* @function Basic
* render a incremental static regeneration page
* @return {Object} The html of the basic page
**/
const Ssg = ({ users }) => {
  return (
    <>
      <h1>Incremental static regeneration</h1>
      <span>This page use the SSG version first and after a certain amount of time (10s here), the page will be rebuild. You can try to reload the page multiple time over 15s for understanding what happen in the back.</span>
      <Users users={users} />
    </>
  )
}

export default Ssg
