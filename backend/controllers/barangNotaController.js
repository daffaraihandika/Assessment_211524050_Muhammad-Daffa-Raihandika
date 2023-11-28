// barangNotaController.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Create BarangNota
export const createBarangNota = async (req, res) => {
  try {
    const response = await prisma.barangNota.create({
      data: {
        KodeNota: req.body.KodeNota,
        KodeBarang: req.body.KodeBarang,
        JumlahBarang: req.body.JumlahBarang,
        HargaSatuan: req.body.HargaSatuan,
        Jumlah: req.body.Jumlah,
      },
    });

    res.status(201).json({ msg: 'BarangNota created successfully', data: response });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get All BarangNota
export const getAllBarangNota = async (req, res) => {
  try {
    const barangNota = await prisma.barangNota.findMany();
    res.status(200).json(barangNota);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get BarangNota by KodeNota
export const getBarangNotaByKodeNota = async (req, res) => {
  try {
    const barangNota = await prisma.barangNota.findMany({
      where: { KodeNota: req.params.KodeNota },
    });
    res.status(200).json(barangNota);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update BarangNota
export const updateBarangNota = async (req, res) => {
  try {
    const { KodeNota, KodeBarang } = req.params;
    const { JumlahBarang, HargaSatuan, Jumlah } = req.body;

    const barangNota = await prisma.barangNota.update({
      where: { KodeNota_KodeBarang: { KodeNota, KodeBarang } },
      data: { JumlahBarang, HargaSatuan, Jumlah },
    });

    res.status(200).json({ msg: 'BarangNota updated successfully', data: barangNota });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete BarangNota
export const deleteBarangNota = async (req, res) => {
  try {
    const { KodeNota, KodeBarang } = req.params;
    await prisma.barangNota.delete({
      where: { KodeNota_KodeBarang: { KodeNota, KodeBarang } },
    });
    res.status(200).json({ msg: 'BarangNota deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
