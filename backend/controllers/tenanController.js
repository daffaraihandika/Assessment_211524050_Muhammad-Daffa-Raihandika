import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createTenan = async (req, res) => {
  try {
    const response = await prisma.Tenan.create({
      data: {
        KodeTenan: req.body.KodeTenan,
        NamaTenan: req.body.NamaTenan,
        HP: req.body.HP,
      },
    });
    res.status(201).json({ msg: "Berhasil membuat tenan", data: response });
  } catch (error) {
    res.status(500).json({ msg: "Gagal membuat tenan" });
    console.error(error);
  }
};

export const updateTenan = async (req, res) => {
    const { KodeTenan } = req.params;
  
    try {
      const response = await prisma.Tenan.update({
        where: {
          KodeTenan: KodeTenan,
        },
        data: {
          NamaTenan: req.body.NamaTenan,
          HP: req.body.HP,
        },
      });
  
      res.json({ msg: "Berhasil memperbarui data tenan", data: response });
    } catch (error) {
      res.status(500).json({ msg: "Gagal memperbarui data tenan" });
      console.error(error);
    }
};

export const getAllTenan = async (req, res) => {
    try {
      const allTenan = await prisma.Tenan.findMany();
      res.json({ msg: "Berhasil mendapatkan semua data tenan", data: allTenan });
    } catch (error) {
      res.status(500).json({ msg: "Gagal mendapatkan data tenan" });
      console.error(error);
    }
};

export const getTenanByKodeTenan = async (req, res) => {
    const { KodeTenan } = req.params;
  
    try {
      const tenan = await prisma.Tenan.findUnique({
        where: {
          KodeTenan: KodeTenan,
        },
      });
  
      if (tenan) {
        res.json({ msg: "Berhasil mendapatkan data tenan", data: tenan });
      } else {
        res.status(404).json({ msg: "Data tenan tidak ditemukan" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Gagal mendapatkan data tenan" });
      console.error(error);
    }
};

export const deleteTenanByKodeTenan = async (req, res) => {
    const { KodeTenan } = req.params;
  
    try {
      const deletedTenan = await prisma.Tenan.delete({
        where: {
          KodeTenan: KodeTenan,
        },
      });
  
      res.json({ msg: "Berhasil menghapus data tenan", data: deletedTenan });
    } catch (error) {
      res.status(500).json({ msg: "Gagal menghapus data tenan" });
      console.error(error);
    }
};

