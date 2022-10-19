-- CreateTable
CREATE TABLE `Weapon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(256) NOT NULL,
    `level` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RangerWeapon` (
    `weaponId` INTEGER NOT NULL,
    `category` ENUM('ASSULT_RIFLE', 'SHOTGUN', 'SNIPER_RIFLE', 'ROCKET_LAUNCHER', 'MISSILE_LAUNCHER', 'GRENADE_LAUNCHER', 'SPECIAL', 'BACKPACK', 'VIECHLE') NOT NULL,

    PRIMARY KEY (`weaponId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Drop` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mission` INTEGER NOT NULL,
    `weaponId` INTEGER NOT NULL,
    `isNew` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RangerWeapon` ADD CONSTRAINT `RangerWeapon_weaponId_fkey` FOREIGN KEY (`weaponId`) REFERENCES `Weapon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Drop` ADD CONSTRAINT `Drop_weaponId_fkey` FOREIGN KEY (`weaponId`) REFERENCES `Weapon`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
