

// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const path = require("path"); // Required for serving static files

// const app = express();
// const port = process.env.PORT || 8000;

// // ✅ Middleware
// app.use(express.json());
// app.use(cors({
//     origin: [process.env.CLIENT_URL, process.env.PRODUCTION_CLIENT_URL],
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE']
// }));

// // ✅ Serve Static Files for Images (Fix Image Not Showing)
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));



// // ✅ Routes
// const bookRoutes = require("./src/books/book.route");
// const orderRoutes = require("./src/orders/order.route");
// const userRoutes = require("./src/users/user.route");
// const adminRoutes = require("./src/stats/admin.stats");

// app.use("/api/books", bookRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/auth", userRoutes);
// app.use("/api/admin", adminRoutes);

// app.get("/", (req, res) => {
//     res.send("📚 Book Store Server is running!");
// });

// // ✅ Database Connection
// async function main() {
//     try {
//         await mongoose.connect(process.env.DB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log("✅ MongoDB connected successfully!");
//     } catch (err) {
//         console.error("❌ Database connection error:", err);
//         process.exit(1);
//     }
// }

// main();

// // ✅ Start Server
// app.listen(port, () => {
//     console.log(`🚀 Server is running on port ${port}`);
// });




require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const port = process.env.PORT || 8000;

// ✅ Middleware
app.use(express.json());

// ✅ CORS Configuration
const allowedOrigins = [process.env.PRODUCTION_CLIENT_URL];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps, curl, postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// ✅ Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("📚 Book Store Server is running!");
});

// ✅ Connect to MongoDB and start server
async function startServer() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully!");

    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  }
}

startServer();
