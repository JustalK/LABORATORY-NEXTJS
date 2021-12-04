/**
* The ssg page
* @module pages/ssg
*/
import Users from '@src/pages/csr/Users'
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
  const posts = await fetcher(GET_USERS_ENDPOINT)
  return {
    props: {
      fallback: {
        [GET_USERS_ENDPOINT]: posts
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
      <h1>Client Side Rendering</h1>
      <span>This page use the page on th server while rebuilding the new page with fresh data. You can try to slow down your network to mobile in the google chrome developer tool and refresh the page.</span>
      <Users />
    </SWRConfig>
  )
}

export default Ssg
