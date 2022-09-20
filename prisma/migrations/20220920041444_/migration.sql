-- DropForeignKey
ALTER TABLE `topics` DROP FOREIGN KEY `topics_tagsId_fkey`;

-- AddForeignKey
ALTER TABLE `topics` ADD CONSTRAINT `topics_tagsId_fkey` FOREIGN KEY (`tagsId`) REFERENCES `tags`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
