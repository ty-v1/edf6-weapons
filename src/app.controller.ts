import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { RangerService } from './ranger.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly rangerService: RangerService) {
  }

  @Get()
  @Render('index')
  index() {
    return {
      message: 'Hello world!',
    };
  }

  @Get('/suggest')
  async suggestWeapon(@Query('name') name: string) {
    return {
      message: await this.rangerService.searchWeapons(name),
    };
  }
}
