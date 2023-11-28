// routes.js

import express from "express";
import { createBarang, updateBarang, getAllBarang, getDetailBarang, deleteBarang } from "../controllers/barangController.js";
import { createKasir, updateKasir, getAllKasir, getKasirByKodeKasir, deleteKasir } from "../controllers/kasirController.js";
import { createTenan, updateTenan, getAllTenan, getTenanByKodeTenan, deleteTenanByKodeTenan } from "../controllers/tenanController.js";
import {
    createNota,
    getAllNota,
    getNota,
    updateNota,
    deleteNota,
  } from "../controllers/notaController.js";
  

const router = express.Router();

router.get('/', (req, res) => {
    res.send('tess')
});

// Barang
router.post('/barang', createBarang)
router.patch('/barang/:KodeBarang', updateBarang)
router.get('/barang', getAllBarang);
router.get('/barang/:KodeBarang', getDetailBarang);
router.delete('/barang/:KodeBarang', deleteBarang);

// Kasir
router.post('/kasir', createKasir)
router.patch('/kasir/:KodeKasir', updateKasir)
router.get('/kasir', getAllKasir); // Rute untuk mendapatkan semua data kasir
router.get('/kasir/:KodeKasir', getKasirByKodeKasir);
router.delete('/kasir/:KodeKasir', deleteKasir);

// Tenan
router.post('/tenan', createTenan);
router.patch('/tenan/:KodeTenan', updateTenan);
router.get('/tenan', getAllTenan); // Rute untuk mendapatkan semua data tenan
router.get('/tenan/:KodeTenan', getTenanByKodeTenan);
router.delete('/tenan/:KodeTenan', deleteTenanByKodeTenan);

// Nota
router.post("/nota", createNota);
router.get("/nota", getAllNota);
router.get("/nota/:KodeNota", getNota);
router.patch("/nota/:KodeNota", updateNota);
router.delete("/nota/:KodeNota", deleteNota);


export default router;