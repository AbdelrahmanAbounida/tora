import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  /**
   * an interceptor to decorate the response content into json like object
   * @param context Returns the *type* of the controller class which the current handler belongs to.
   * @param next  Returns an `Observable` representing the response stream from the route handler
   */
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        data;
      }),
    );
  }
}
