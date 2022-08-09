import express from "express";
import EditorasController from "../controllers/editorasController.js";

const router = express.Router();

router.get("/editoras", EditorasController.listarEditoras);
router.get("/editoras/:id", EditorasController.listarEditoraPorId)
router.post("/editoras", EditorasController.cadastrarEditora);
router.put("/editoras/:id", EditorasController.atualizarEditora);
router.delete("/editoras/:id", EditorasController.excluirEditora);


export default router;

