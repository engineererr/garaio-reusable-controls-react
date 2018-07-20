/**
 * Helper with general methods to simplify some routines
 */
export class GeneralHelper {
  /**
   * Trims slash at the end of URL if needed
   * @param url URL
   */
  public static trimSlash(url: string): string {
    if (url.lastIndexOf('/') === url.length - 1)
      return url.slice(0, -1);
    return url;
  }
}
