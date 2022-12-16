import { BasicStrategy as Strategy } from 'passport-http';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {

  private readonly username: string;
  private readonly password: string;

  constructor(private readonly configService: ConfigService) {
    super();

    this.username = configService.get<string>('USERNAME');
    this.password = configService.get<string>('PASSWORD');
  }

  validate(username: string, password: string): boolean {
    if (username === this.username && password === this.password) {
      return true;
    }

    throw new UnauthorizedException();
  }
}
