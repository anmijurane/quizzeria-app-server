import { UnauthorizedException } from '@nestjs/common';
import { CATALOG_ERRORS } from 'src/utils/CatalogErrors';

export const UnauthorizedExceptionByUserNotFound = () =>
  new UnauthorizedException({
    message: CATALOG_ERRORS.AUTH.USER_NOT_FOUND.replace('AUTH_', ''),
    name: 'Unauthorized',
    code: CATALOG_ERRORS.AUTH.USER_NOT_FOUND,
  });

export const UnauthorizedExceptionByUserNotActive = () =>
  new UnauthorizedException({
    message: CATALOG_ERRORS.AUTH.USER_NOT_FOUND.replace('AUTH_', ''),
    name: 'Unauthorized',
    code: CATALOG_ERRORS.AUTH.USER_NOT_FOUND,
  });

export const UnauthorizedExceptionByBadCredencials = () =>
  new UnauthorizedException({
    message: CATALOG_ERRORS.AUTH.BAD_CREDENTIALS.replace('AUTH_', ''),
    name: 'Unauthorized',
    code: CATALOG_ERRORS.AUTH.BAD_CREDENTIALS,
  });

export const UnauthorizedCheckSessionException = () =>
  new UnauthorizedException({
    message: CATALOG_ERRORS.AUTH.BAD_CREDENTIALS.replace('AUTH_', ''),
    name: 'Unauthorized',
    code: CATALOG_ERRORS.AUTH.BAD_CREDENTIALS,
  });

export const ResourceUnauthorizedException = (extraParams?: object) =>
  new UnauthorizedException({
    message: CATALOG_ERRORS.AUTH.RESOURCE_UNAUTHORIZED.replace('AUTH_', ''),
    name: 'Unauthorized',
    code: CATALOG_ERRORS.AUTH.RESOURCE_UNAUTHORIZED,
    ...extraParams,
  });
