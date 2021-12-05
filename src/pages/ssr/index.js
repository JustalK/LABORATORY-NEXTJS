/**
* The ssr page
* This page will be rebuilt at every request made on this page.
* Every time an user request the page, the function getServerSideProps will be executed and the page will be rebuild before being served.
* The cons is the page will take more time to be given to the user.
* The pro is the page will always have the latest data.
* @module pages/ssr
*/
import Users from '@src/components/Users'
import { fetcher } from '@src/services/fetcher'
import { GET_USERS_ENDPOINT } from '@src/services/users'
/**
* @function getServerSideProps
* Get the users on the server side at every request
* @return {Users[]} 10 random users from the API
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
* @function Ssr
* render a server side rendered page
* @return {Object} The html of the ssr page
**/
const Ssg = ({ users }) => {
  return (
    <>
      <h1>Server Side Rendering</h1>
      <span>This page will be build at every request with new fresh data evertyime. You can try to reload the page multiple time, the data will change at every reload.</span>
      <Users users={users} />
    </>
  )
}

export default Ssg
