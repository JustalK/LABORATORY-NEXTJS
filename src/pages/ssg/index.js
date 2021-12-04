/**
* The ssg page
* @module pages/ssg
*/
import Users from '@src/pages/ssg/Users'
import { fetcher } from '@src/services/fetcher'
import { SWRConfig } from 'swr'
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
      fallback: {
        [GET_USERS_ENDPOINT]: users
      }
    }
  }
}

/**
* @function Basic
* render a static page (SSG : Static site generation)
* @return {Object} The html of the basic page
**/
const Ssg = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <h1>Static Page (with data)</h1>
      <span>This page use SSG and read dynamic data with an API call using SWR.</span>
      <Users />
    </SWRConfig>
  )
}

export default Ssg
