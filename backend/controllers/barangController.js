import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createBarang = async (req, res) => {
    try {
      const response = await prisma.Barang.create({
        data: {
          KodeBarang: req.body.KodeBarang,
          NamaBarang: req.body.NamaBarang,
          Satuan: req.body.Satuan,
          HargaSatuan: req.body.HargaSatuan,
          Stok: req.body.Stok,
        },
      });
      res
        .status(201)
        .json({ msg: "Berhasil membuat barang", data: response });
    } catch (error) {
      res.status(500).json({ msg: "Gagal membuat barang" });
      console.log(error);
    }
};

export const updateBarang = async (req, res) => {
    const { KodeBarang } = req.params;
  
    try {
      const response = await prisma.Barang.update({
        where: {
          KodeBarang: KodeBarang,
        },
        data: {
          NamaBarang: req.body.NamaBarang,
          Satuan: req.body.Satuan,
          HargaSatuan: req.body.HargaSatuan,
          Stok: req.body.Stok,
        },
      });
  
      res.json({ msg: "Berhasil memperbarui barang", data: response });
    } catch (error) {
      res.status(500).json({ msg: "Gagal memperbarui barang" });
      console.log(error);
    }
};

export const getAllBarang = async (req, res) => {
    try {
      const allBarang = await prisma.Barang.findMany();
      res.json({ msg: "Berhasil mendapatkan semua data barang", data: allBarang });
    } catch (error) {
      res.status(500).json({ msg: "Gagal mendapatkan data barang" });
      console.error(error);
    }
};

export const getDetailBarang = async (req, res) => {
    const { KodeBarang } = req.params;
  
    try {
      const barang = await prisma.Barang.findUnique({
        where: {
          KodeBarang: KodeBarang,
        },
      });
  
      if (barang) {
        res.json({ msg: "Berhasil mendapatkan data barang", data: barang });
      } else {
        res.status(404).json({ msg: "Data barang tidak ditemukan" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Gagal mendapatkan data barang" });
      console.error(error);
    }
};

export const deleteBarang = async (req, res) => {
    const { KodeBarang } = req.params;
  
    try {
      const deletedBarang = await prisma.Barang.delete({
        where: {
          KodeBarang: KodeBarang,
        },
      });
  
      res.json({ msg: "Berhasil menghapus data barang", data: deletedBarang });
    } catch (error) {
      res.status(500).json({ msg: "Gagal menghapus data barang" });
      console.error(error);
    }
};