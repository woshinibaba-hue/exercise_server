-- AlterTable
ALTER TABLE `topics` ADD COLUMN `usersId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `topics` ADD CONSTRAINT `topics_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
