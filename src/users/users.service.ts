
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      email: 'test@example.com',
      password: '$2b$10$2SejZZo4J7xFiH8P7ZbQ5emlFAn3pF6N9oZbhrlYw7h6CmGgVQ0/O', // bcrypt hash for "password123"
    },
  ];

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  // 🔹 Add this method so AuthService can use it
  async findOneByEmail(email: string) {
    return this.users.find(user => user.email === email);
  }
}

