import { Controller, Get, Param, Query } from '@nestjs/common';

import { Message } from '@ac/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('employee')
  getEmployee(@Query('name') name: string) {
    if (name === 'Sam') {
      return {
        id: 0,
        name,
        location: {
          provinceCode: '014',
          distirictCode: '1404',
        },
      };
    } else if (name === 'Lisa') {
      return {
        id: 1,
        name,
        location: {
          provinceCode: '016',
          distirictCode: '1601',
        },
      };
    } else if (name === 'Moe') {
      return {
        id: 1,
        name,
        location: {
          provinceCode: '042',
          distirictCode: '4201',
        },
      };
    }
    return {};
  }
}
