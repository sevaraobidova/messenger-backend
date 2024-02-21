"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./.development.env" });
var nodeenv = process.env.NODE_ENV;
var PORT = process.env.PORT;
var MY_LINK = process.env.MY_LINK;
var MONGO_LINK = process.env.MONGO_LINK;
var userRouter = require("../app/auth/router/authRoute");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/auth", userRouter);
app.get("/", function (req, res) {
    res.send("Hello world hello");
});
mongoose_1.default
    .connect("".concat(MONGO_LINK))
    .then(function () {
    console.log("Connected to MongoDB");
})
    .catch(function (err) {
    console.error("Error connecting to MongoDB:", err);
});
app.listen(PORT, function () { return console.log("Server is running on ".concat(MY_LINK, ":").concat(PORT)); });
