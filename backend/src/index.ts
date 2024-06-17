import express, { Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import ThreadController from "./controllers/thread";
import AuthController from "./controllers/auth";
import UserController from "./controllers/user";
import dotenv from "dotenv";
import { upload } from "./middlewares/upload-file";
import { authenticate } from "./middlewares/authenticate";
dotenv.config();

    const app = express()
    const port = 3000;
    const router = express.Router();
    const routerv2 = express.Router();
    const prisma = new PrismaClient()

    app.use(cors());
    app.use(express.json())
    app.use("/api/v1", router)
    app.use("/api/v2", routerv2)
    app.use("/uploads", express.static("uploads"))

    app.get("/", (req : Request , res : Response) => {
        res.send("Hello Welcome to Circle!")
    });
    
    // V1
    router.get("/", (req : Request, res : Response) =>{
        res.send("Wecome to V1!")
    });

    router.get("/threads", authenticate, ThreadController.find);
    router.get("/threads/:id", authenticate, ThreadController.findOne);
    router.post("/threads", authenticate, upload.single("image"), ThreadController.create);
    router.patch("/threads/:id", authenticate, ThreadController.update);
    router.delete("/threads/:id", authenticate, ThreadController.remove);

    router.post("/auth/login", AuthController.login);
    router.post("/auth/register", AuthController.register);
    router.post("/auth/check",authenticate, AuthController.check);

    router.get("/users", authenticate, UserController.find);
    // V2
    routerv2.get("/", (req : Request, res : Response) =>{
        res.send("Wecome to V2!")
    });
    
    app.listen(port, () => {
        console.log(`server berjalan di port ${port}`)
    })

