-- AlterTable
ALTER TABLE `topics` ADD COLUMN `tagsId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `topics` ADD CONSTRAINT `topics_tagsId_fkey` FOREIGN KEY (`tagsId`) REFERENCES `tags`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
