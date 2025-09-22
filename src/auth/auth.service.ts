// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service'; // ✅ import UsersService
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {} // ✅ inject UsersService
    
  // 🔹 Validate user for LocalStrategy
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email); // ✅ check user by email
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user; // hide password before returning
      return result;
    }
    return null;
  }

  // Example login (optional, for JWT)
  async login(user: any) {
    return {
      message: 'Login successful',
      user,
    };
  }

  // You can keep the generated CRUD stuff if needed
  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: any) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}

