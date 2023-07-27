import app from "./app";
import "dotenv/config";
import { appDataSource } from "./data-source";

(async () => {
  await appDataSource.initialize()
    .then(() => {
      app.listen(9000, () => {
        console.log("Servidor executando");
      });
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
})();
