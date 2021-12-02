/**
* The module for managing the connection with GraphCMS
* @module services/libs/graphCmsClient
*/
import { GraphQLClient } from 'graphql-request'

'use strict'

/**
* @function GraphQLClient
* Create the GraphQLClient for making the request
* @return {Object} The graphQlClient
**/
export default new GraphQLClient(
  process.env.URL_API_GRAPHCMS
)
