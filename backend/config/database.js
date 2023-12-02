import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "stocksystem",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.stack);
    return;
  }

  console.log("Conectado ao banco de dados com o ID " + db.threadId);
});

export default db;
