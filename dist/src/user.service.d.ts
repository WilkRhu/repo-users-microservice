import { Repository } from 'typeorm';
import { CreateUserDto } from './DTO/user.create.dto';
import { Users } from './entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<Users>);
    create(createUserDto: CreateUserDto): Promise<Users>;
    getUsers(): string;
}
