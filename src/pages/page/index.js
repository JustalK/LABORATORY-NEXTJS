/**
* The home page
* @module pages/home
*/
import { getPages } from '@src/services/page'

'use strict'

/**
* @function getStaticProps
* Get all the pages at build time
* @return {Post[]} All the pages in the database
**/
/* istanbul ignore next */
export async function getStaticProps () {
  return getPages()
}

/**
* @function Home
* render the home page
* @param {Post[]} pages The list of Post
* @return {Object} The html of the home
**/
const Home = ({ pages }) => {
  return (
    <div>
      <h1>Page</h1>
      {pages.map((post, index) => (
        <p key={index}>{post.title}</p>
      ))}
    </div>
  )
}

export default Home
