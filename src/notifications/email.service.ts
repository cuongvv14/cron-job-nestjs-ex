import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  sendFrequentEmail() {
    this.logger.log('Executing task every 3 seconds...');
  }
}
