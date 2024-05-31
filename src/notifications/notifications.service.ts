import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EmailService } from './email.service';

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(private readonly emailService: EmailService) {}

  @Cron('*/3 * * * * *')
  handleFrequentNotifications() {
    this.logger.log('Running cron job every 3 seconds');
    this.emailService.sendFrequentEmail();
  }
}
