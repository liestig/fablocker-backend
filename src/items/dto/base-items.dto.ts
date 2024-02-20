import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString, isNotEmpty } from "class-validator";

export class BaseItemDto{

    @IsNotEmpty()
    @IsNumber()
    readonly id: number

    @ApiProperty({example: 6})
    @IsNotEmpty({message: "id_locker cannot be empty"})
    @IsNumber()
    id_locker: number

    @ApiProperty({example:"oscilloscope"})
    @IsNotEmpty({message: "name cannot be empty"})
    @IsString()
    name: string

    @ApiProperty({example:"permet de mesurer une tension"})
    // @IsNotEmpty({message: "description cannot be empty"})
    @IsString()
    description: string

    @ApiProperty({example: true})
    // @IsNotEmpty({message: "availability cannot be empty"})
    @IsBoolean()
    availability: boolean

    @ApiProperty({example:95})
    // @IsNotEmpty()
    @IsNumber()
    weight: number

    @ApiProperty({example: 7})
    // @IsNotEmpty({message: "borrow cannot be empty"})
    @IsNumber()
    borrow_duration: number

}