import { CreateUserDto } from './DTO/user.create.dto';
import { Users } from './entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(user: CreateUserDto): Promise<Users>;
    getUser(): string;
}
