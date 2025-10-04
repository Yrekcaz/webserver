/**
 * Port for the server to run on.
 */
export const port: number = 80;

/**
 * Path for the website to be redirected on a 404.
 */
export const notFoundRedirect: string = '/404';

/**
 * Should the server redirect to a 404 on an invalid domain name?
 * If false, the server will return a message error.
 
 * http[s]://subdomain.domain.tld/404 - if you wanted it on the root domain, and domain waffles.com, it would be https://waffles.com/404
 * This can be any valid connected domain
 */
export const invalidDomainRedirect: false | string = 'http://localhost/404';

/**
 * Base domain name for the API.
 * subdomain.domain.tld - if you wanted it on subdomain img and domain waffles.com, it would be img.waffles.com
 * This must reflect the folder name in client
 */
export const apiHostDomainName: string = 'api.localhost'; 
