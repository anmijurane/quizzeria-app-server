import { applyDecorators, UseGuards } from '@nestjs/common';
import { RoleProtected } from './role-protected.decorator';
import { UserRolGuard } from '../guards/user-rol.guard/user-rol.guard';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/common/interfaces';

export function Auth(...roles: Roles[]) {
  return applyDecorators(
    RoleProtected(...roles),
    UseGuards(AuthGuard(), UserRolGuard),
  );
}
