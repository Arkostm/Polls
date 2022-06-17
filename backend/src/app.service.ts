import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRoot(): string {
    return `Welcome to root of Henry Polls's api!`;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
