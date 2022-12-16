import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';

@Catch(HttpException)
export class AuthExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    if (HttpStatus.UNAUTHORIZED == status) {
      response.set('WWW-Authenticate', 'Basic realm="aaa"');
    }
    response
      .status(status)
      .json({
        statusCode: status,
      });
  }
}
