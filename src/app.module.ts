import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DropService } from './drop.service';
import { WeaponService } from './weapon.service';

@Module({
  controllers: [AppController],
  providers: [AppService, DropService, WeaponService],
})
export class AppModule {
}
