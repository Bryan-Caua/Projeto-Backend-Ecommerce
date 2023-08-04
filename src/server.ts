import app from "./app";
import "dotenv/config";
import { appDataSource } from "./data-source";


(async () => {
  await appDataSource.initialize()
  .then(() => {
      const PORT = process.env.PORT || 3000
      app.listen(PORT, () => {
        console.log(`Servidor executando na porta ${PORT}`);
      });
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
})();
