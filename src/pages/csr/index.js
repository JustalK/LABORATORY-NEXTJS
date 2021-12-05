/**
* The csr page
* This one is bit more complicated than the other rendering system.
* The static page will be served by the server when the client connects to the page.
* At the same time, on the client side, we fetch the fresh data with the useSWR hook.
* Once the call is done, we populate the page with the data.
* @module pages/csr
*/
import Users from '@src/pages/csr/Users'
import { fetcher } from '@src/services/fetcher'
import { SWRConfig } from 'swr'
import { GET_USERS_ENDPOINT } from '@src/services/users'
/**
* @function getStaticProps
* Get the users at build time, this function is executed on the server side.
* @return {Users[]} 10 random users from the API
**/

export async function getStaticProps () {
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
* @function Csr
* render a client side rendering page
* @return {Object} The html of the csr page
**/
const Ssg = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <h1>Client Side Rendering</h1>
      <span>This page use the page on the server while we query for new fresh data on client side. You can try to slow down your network to mobile in the google chrome developer tool and refresh the page.
      You will received first the data from the static page and then the new fresh data will populate the page.</span>
      <Users />
    </SWRConfig>
  )
}

export default Ssg
