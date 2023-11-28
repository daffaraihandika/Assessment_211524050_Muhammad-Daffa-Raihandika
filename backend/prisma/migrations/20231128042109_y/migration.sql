/*
  Warnings:

  - The primary key for the `BarangNota` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `JamNota` on the `Nota` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "BarangNota" DROP CONSTRAINT "BarangNota_pkey",
ADD COLUMN     "KodeBarangNota" SERIAL NOT NULL,
ADD CONSTRAINT "BarangNota_pkey" PRIMARY KEY ("KodeBarangNota");

-- AlterTable
ALTER TABLE "Nota" DROP COLUMN "JamNota",
ADD COLUMN     "JamNota" TIME NOT NULL;
