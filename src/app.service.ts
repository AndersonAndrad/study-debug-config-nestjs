import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  listAllUsers() {
    const user = ['anderson', 'andrade', 'silva'];

    return { user };
  }
}
