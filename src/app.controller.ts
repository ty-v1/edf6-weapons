import { Body, Controller, Get, HttpStatus, Post, Query, Render, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import { RangerService } from './ranger.service';
import { CreateDropDto } from './create-drop.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly rangerService: RangerService) {
  }

  @Get()
  @Render('index')
  async index(@Req() request: Request, @Query('name') name?: string) {
    return {
      name: name,
      successMessage: request.flash('success') ?? '',
      drops: await this.rangerService.findDropByWeaponName(name ?? ''),
    };
  }

  @Get('/register')
  @Render('register')
  async management(@Req() request: Request) {
    return {
      errorMessage: request.flash('error') ?? [],
      weapons: await this.rangerService.findAllWeapons(),
    };
  }

  @Post('/register')
  async register(
    @Body() dto: CreateDropDto,
    @Req() request: Request,
    @Res() res: Response,
  ) {

    const result = await this.rangerService.register(dto);

    if (result === true) {
      request.flash('success', '成功');
      res.status(HttpStatus.OK)
        .redirect('/');
      return;
    }

    request.flash('error', result);
    res.status(HttpStatus.BAD_REQUEST)
      .redirect('/register');
  }
}
