/**
* The module for managing the request for the Page
* @module services/Page
*/
/**
 * The Page object
 * @typedef {Object} Page
 * @property {string} _id The id of the Page
 * @property {string} title The title of the Page
 */

import graphCmsClient from '@src/services/libs/graphCmsClient'

'use strict'

/**
* @function getPages
* Get all the Pages from graphcms
* @return {Page[]} All the Pages in the database
**/
export async function getPages () {
  const { pages } = await graphCmsClient.request(
    `
    query {
      pages {
        title
      }
    }
  `
  )

  return {
    props: {
      pages
    }
  }
}
