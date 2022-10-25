import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { RangerService } from './ranger.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly rangerService: RangerService) {
  }

  @Get()
  @Render('index')
  async index(@Query('name') name?: string) {
    if (name === undefined) {
      return {
        drops: await this.rangerService.findAllDrops(),
      };
    }

    return {
      name: name,
      drops: await this.rangerService.findDropByWeaponName(name),
    };
  }
}
