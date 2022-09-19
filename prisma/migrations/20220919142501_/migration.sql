-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(15) NOT NULL,
    `password` VARCHAR(18) NOT NULL,
    `avatar` VARCHAR(255) NULL,
    `referral` VARCHAR(255) NULL DEFAULT '这个人好懒，什么都没留下~',
    `createAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
