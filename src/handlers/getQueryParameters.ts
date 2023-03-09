/**
 * Get query parameters from URL.
 *
 * @param url { string } URL
 * @returns { string } Query parameters.
 */
const getQueryParameters = (url: string): string => {
  const URI = decodeURI(url);

  /**
   * Check if is Vinted URI.
   */
  if (!URI.match(/^https:\/\/(www.)?vinted\.([a-z]+)\/(vetements|catalog)\?\S+/)) {
    throw new Error("Invalid URI format");
  }

  /**
   * Check if URI contains a query string.
   */
  if (URI.split("?").length !== 2) {
    throw new Error("Invalid URI parameters");
  }

  const queryString = URI.split("?")[1]!
    .replaceAll("catalog[]", "catalog_id[]")
    .replaceAll("status[]", "status_id[]")
    .replaceAll("[]", "s");

  const params = queryString.split("&");
  const paramsObject: { [index: string]: string } = {};

  /**
   * Organize parameters.
   */
  params.forEach(param => {
    if (param.split("=").length !== 2) {
      throw new Error(`Invalid URI parameters: ${param}`);
    }

    if (paramsObject[param.split("=")[0] as string])
      paramsObject[param.split("=")[0] as string] += `,${param.split("=")[1]}`;
    else paramsObject[param.split("=")[0] as string] = `${param.split("=")[1]}`;
  });

  let finalParams = "";

  /**
   * Format final parameters string.
   */
  Object.keys(paramsObject!).forEach(paramObject => {
    if (paramObject !== "time") {
      if (finalParams !== "") finalParams += `&${paramObject}=${paramsObject[paramObject]}`;
      else finalParams += `${paramObject}=${paramsObject[paramObject]}`;
    }
  });

  return finalParams;
};

export default getQueryParameters;
