const jsonServer = require("json-server");
const auth = require("json-server-auth");
const queryString = require("query-string");
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/echo", (req, res) => {
  res.jsonp(req.query);
});

server.use(auth);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  console.log({
    req: req,
  });
  // Continue to JSON Server router
  next();
});

router.render = (req, res) => {
  const headers = res.getHeaders();
  const totalCountHeader = headers["x-total-count"];
  if (req.method === "GET" && totalCountHeader) {
    const queryParams = queryString.parse(req._parsedOriginalUrl.query);
    const results = {
      data: res.locals.data,
      pagination: {
        _page: Number.parseInt(queryParams._page) || 1,
        _limit: Number.parseInt(queryParams._limit) || 10,
        _totalRows: Number.parseInt(totalCountHeader),
      },
    };
    console.log(results);
    return res.jsonp(results);
  }
  return res.jsonp(res.locals.data);
};

// Use default router
server.use("/api", router);
server.listen(4444, () => {
  console.log("JSON Server is running");
});
