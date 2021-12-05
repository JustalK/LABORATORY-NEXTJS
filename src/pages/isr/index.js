/**
* The isr page
* The page will rendered the static page on the server.
* And will revalidate the page every 10s meaning the page will be rerendered on the server side.
*
* For example, if user A visits the page and then user B visits the page 1min after the user A, the page will be rebuild on the server side.
* Another example, if user A visits the page and then user B visits the page 5s after user A, the page served to both user will be the static one on the server.
* @module pages/isr
*/
import Users from '@src/components/Users'
import { fetcher } from '@src/services/fetcher'
import { GET_USERS_ENDPOINT } from '@src/services/users'
/**
* @function getStaticProps
* Get the users at build time, this function is executed on the server side
* @return {Users[]} 10 random users from the API
**/
export async function getStaticProps () {
  const users = await fetcher(GET_USERS_ENDPOINT)
  return {
    props: {
      users
    },
    revalidate: 10 // Revalidate the page every 10s
  }
}

/**
* @function Isr
* render a incremental static regeneration page
* @return {Object} The html of the isr page
**/
const Isr = ({ users }) => {
  return (
    <>
      <h1>Incremental static regeneration</h1>
      <span>This page use the SSG version first and after a certain amount of time (10s here), the page will be rebuild. You can try to reload the page multiple time over 15s for understanding what happen in the back.</span>
      <Users users={users} />
    </>
  )
}

export default Isr
