import express, { Router } from "express"
import { addData, deleteData, formData, putForm } from "../controllers/formController.js";

const route = express.Router()

route.
get("/formData", formData)
route.
post("/formData", addData)
route.
put("/formData/:id", putForm)
route.
delete("/formData/:id",deleteData)

export default route