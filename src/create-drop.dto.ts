import { IsBoolean, IsInt } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CreateDropDto {
  @Type(() => Number)
  @IsInt()
  weaponId: number;

  @Type(() => Number)
  @IsInt()
  mission: number;

  @IsBoolean()
  @Transform(({ value }) => value === 'on')
  isNew: boolean;
}
