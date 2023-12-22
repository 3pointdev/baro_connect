class PageUrlConfig {
  public notFound = "*";
  public home = "/";
  public login = "/login";
  public join = "/login";
  public product = "/product";
  public chat = "/chat";
  public contact = "/contact";
  public find = "/find";
  public user = "/user";
  public task = "/task";
  public setting = "/setting";

  addParams(url: string, params: Array<any>) {
    let querystring = [];
    let pageUrl = url;
    if (url.includes("?")) {
      const split = url.split("?");
      pageUrl = split[0];
      const urlParam = split[1];
      if (urlParam.includes("&")) {
        urlParam.split("&").forEach((v, k) => {
          querystring.push(`${v}${params[k]}`);
        });
      } else {
        querystring.push(`${urlParam}${params[0]}`);
      }
      return `${pageUrl}?${querystring.join("&")}`;
    }
    return pageUrl;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PageUrlConfig();
