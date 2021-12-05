/**
* The basic page
* When we dont use any function from next.js
* The page will be served as a static page, no rerendered will be done on the server.
* @module pages/basic
*/

/**
* @function Basic
* render the basic page
* @return {Object} The html of the basic page
**/
const Basic = () => {
  return (
    <div>
      <h1>Static Page (without data)</h1>
      <span>This page has been compiled at build time. The page is static.</span>
    </div>
  )
}

export default Basic
