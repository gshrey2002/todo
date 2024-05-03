// import { app } from "./app.js";
// import { connectDB } from "./data/database.js";

// connectDB();

// app.listen(process.env.PORT, () => {
//   console.log(
//     `Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`
//   );
// });
import { app } from "./app.js";
import { connectDB } from "./data/database.js";
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

connectDB();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
  console.log(
    `Server is working on port:${PORT} in ${NODE_ENV} Mode`
  );
});
