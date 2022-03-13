import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(1, 100)
  readonly name: string;

  @IsEmail()
  @Length(1, 100)
  readonly email: string;

  @IsString()
  @Length(1, 8)
  readonly password: string;

  readonly ddd: number;

  readonly phone: number;
}
