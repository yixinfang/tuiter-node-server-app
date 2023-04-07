import express from 'express';
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://127.0.0.1:27017/tuiter'

// mongoose.connect(CONNECTION_STRING);

// mongoose.connect('mongodb://127.0.0.1:27017/tuiter');
mongoose.connect('mongodb+srv://yixinfang15:OR6SJcJmr95q0ozJ@cluster0.inds00k.mongodb.net/tuiter?retryWrites=true&w=majority')
const app = express();
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);
