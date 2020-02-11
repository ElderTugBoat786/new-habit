const sqlite3 = require('sqlite3');

const dbName = 'habits.db'
let db = new sqlite3.Database(`./db/${dbName}`, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log(`Connected to the ${dbName} database.`);
});

var sqlHabits =   "CREATE TABLE IF NOT EXISTS habits ( "+
                    "id   INTEGER PRIMARY KEY AUTOINCREMENT, "+
                    "name VARCHAR(50), "+
                    "description TEXT,"+
                    "days TEXT,"+
                    "created_at TEXT,"+
                    "modified_at TEXT ) "

var sqlStatus = " CREATE TABLE IF NOT EXISTS habits_staus ( "+
                    "id   INTEGER PRIMARY KEY AUTOINCREMENT , "+
                    "habits_id INTEGER,"+
                    "status INTEGER,"+
                    "date TEXT,"+
                    "created_at TEXT,"+
                    "modified_at TEXT ) "
db.run(sqlHabits);
db.run(sqlStatus);

module.exports = db;
