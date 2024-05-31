import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationModule } from './notifications/notifications.module';

@Module({
  imports: [
    ScheduleModule.forRoot(), //Kích hoặt tác vụ định kỳ
    NotificationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
