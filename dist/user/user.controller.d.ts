import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        password: any;
        id: number;
        name: string;
        email: string;
        balance: number;
        isActive: boolean;
    }>;
    findAll(): Promise<import(".prisma/client").User[]>;
    findOne(id: string): Promise<import(".prisma/client").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        password: any;
        id: number;
        name: string;
        email: string;
        balance: number;
        isActive: boolean;
    }>;
    remove(id: string): Promise<import(".prisma/client").User>;
}
