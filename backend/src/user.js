const mysql = require("mysql");
const Promise = require("bluebird");
const Async = require("bluebird/js/release/async");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
const dbinfo = {
  host: "localhost",
  user: "user1",
  password: "cdac",
  database: "wpt",
};
let addUser = async (user) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `insert into users(username) values(?)`;
  connection.queryAsync(sql, [user.username]);
  console.log("data added");
  await connection.endAsync();
};

let selectAllmassages = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let sql = `select * from users order by desc`;
  let list = await connection.queryAsync(sql, []);
  console.log("data showed");
  await connection.endAsync();
  return list;
};
// const user = {
//   username: "hi...",
// };
// addUser(user);
// selectAllmassages();
module.exports = { addUser, selectAllmassages };
