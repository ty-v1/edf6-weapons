import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DropService } from './drop.service';
import { WeaponService } from './weapon.service';
import { ConfigModule } from '@nestjs/config';
import { BasicStrategy } from './basic.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [ConfigModule.forRoot(), PassportModule],
  controllers: [AppController],
  providers: [AppService, DropService, WeaponService, BasicStrategy],
})
export class AppModule {
}
