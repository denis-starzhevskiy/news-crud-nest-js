import {
  IsNotEmpty,
  IsString,
  IsNumber,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateNewsDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(100)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
