import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Render,
  Req,
  Res,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import { CreateDropDto } from './create-drop.dto';
import { DropService } from './drop.service';
import { WeaponService } from './weapon.service';
import { WeaponCategory } from './weapon-category';
import { BasicAuthGuard } from './basic-auth.guard';
import { AuthExceptionFilter } from './auth-exception.filter';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dropService: DropService,
    private readonly weaponService: WeaponService,
  ) {
  }

  @Get()
  @Render('index')
  @UseFilters(new AuthExceptionFilter())
  @UseGuards(BasicAuthGuard)
  async index(@Req() request: Request, @Query('name') name?: string) {
    return {
      name: name,
      successMessage: request.flash('success') ?? [],
      errorMessage: request.flash('error') ?? [],
      drops: await this.dropService.findDropByName(name ?? '', WeaponCategory.ranger),
    };
  }

  @Get('/register')
  @Render('register')
  @UseGuards(BasicAuthGuard)
  @UseFilters(new AuthExceptionFilter())
  async management(@Req() request: Request) {
    return {
      errorMessage: request.flash('error') ?? [],
      weapons: await this.weaponService.findAllWeapons(WeaponCategory.ranger),
    };
  }

  @Post('/register')
  @UseGuards(BasicAuthGuard)
  @UseFilters(new AuthExceptionFilter())
  async register(
    @Body() dto: CreateDropDto,
    @Req() request: Request,
    @Res() res: Response,
  ) {

    const result = await this.dropService.register(dto);

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

  @Post('/delete/:id/:mission')
  @UseGuards(BasicAuthGuard)
  @UseFilters(new AuthExceptionFilter())
  async delete(
    @Param('id') id: string,
    @Param('mission') mission: string,
    @Res() res: Response,
    @Req() request: Request,
  ) {
    const result = await this.dropService.delete(id, parseInt(mission));

    if (result === true) {
      request.flash('success', '成功');
      res.status(HttpStatus.OK)
        .redirect('/');
      return;
    }

    request.flash('error', result);
    res.status(HttpStatus.BAD_REQUEST)
      .redirect('/');
  }
}
