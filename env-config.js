const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BACKEND_URL":
    process.env.NODE_ENV === "production" ? "/louis-cf-lin.github.io" : "",
};
