/**
* The basic page
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
      <span>This page use SSG and does not have any data.</span>
    </div>
  )
}

export default Basic
