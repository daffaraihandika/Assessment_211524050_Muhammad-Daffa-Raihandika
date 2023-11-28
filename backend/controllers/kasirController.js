import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createKasir = async (req, res) => {
    try {
      const response = await prisma.Kasir.create({
        data: {
          KodeKasir: req.body.KodeKasir,
          Nama: req.body.Nama,
          HP: req.body.HP,
        },
      });
      res.status(201).json({ msg: "Berhasil membuat kasir", data: response });
    } catch (error) {
      res.status(500).json({ msg: "Gagal membuat kasir" });
      console.error(error);
    }
};

export const updateKasir = async (req, res) => {
    const { KodeKasir } = req.params;
  
    try {
      const response = await prisma.Kasir.update({
        where: {
          KodeKasir: KodeKasir,
        },
        data: {
          Nama: req.body.Nama,
          HP: req.body.HP,
        },
      });
  
      res.json({ msg: "Berhasil memperbarui data kasir", data: response });
    } catch (error) {
      res.status(500).json({ msg: "Gagal memperbarui data kasir" });
      console.error(error);
    }
};

export const getAllKasir = async (req, res) => {
    try {
      const allKasir = await prisma.Kasir.findMany();
      res.json({ msg: "Berhasil mendapatkan semua data kasir", data: allKasir });
    } catch (error) {
      res.status(500).json({ msg: "Gagal mendapatkan data kasir" });
      console.error(error);
    }
};

export const getKasirByKodeKasir = async (req, res) => {
    const { KodeKasir } = req.params;
  
    try {
      const kasir = await prisma.Kasir.findUnique({
        where: {
          KodeKasir: KodeKasir,
        },
      });
  
      if (kasir) {
        res.json({ msg: "Berhasil mendapatkan data kasir", data: kasir });
      } else {
        res.status(404).json({ msg: "Data kasir tidak ditemukan" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Gagal mendapatkan data kasir" });
      console.error(error);
    }
};

export const deleteKasir = async (req, res) => {
    const { KodeKasir } = req.params;
  
    try {
      const deletedKasir = await prisma.Kasir.delete({
        where: {
          KodeKasir: KodeKasir,
        },
      });
  
      res.json({ msg: "Berhasil menghapus data kasir", data: deletedKasir });
    } catch (error) {
      res.status(500).json({ msg: "Gagal menghapus data kasir" });
      console.error(error);
    }
  };