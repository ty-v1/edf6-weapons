/*
  Warnings:

  - You are about to drop the `RangerWeapon` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Weapon` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `RangerWeapon` DROP FOREIGN KEY `RangerWeapon_weaponId_fkey`;

-- AlterTable
ALTER TABLE `Weapon` ADD COLUMN `category` ENUM('RANGER', 'WING_DIVER', 'AIR_RAIDER', 'FENCER') NOT NULL;

-- DropTable
DROP TABLE `RangerWeapon`;
