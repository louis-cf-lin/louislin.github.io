module.exports = {
  "process.env.BACKEND_URL":
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_BASE_PATH
      : "",
};
