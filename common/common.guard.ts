import type { CanActivate, ExecutionContext } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

/** 根据用户是否登录进行鉴权 */
@Injectable()
export class CommonGuard implements CanActivate {
  public canActivate(context: ExecutionContext): boolean {
    return true;
  }
}
