import { IsBoolean, IsInt, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CreateDropDto {
  @IsString()
  weaponId: string;

  @Type(() => Number)
  @IsInt()
  mission: number;

  @IsBoolean()
  @Transform(({ value }) => value === 'on')
  isNew: boolean;
}
