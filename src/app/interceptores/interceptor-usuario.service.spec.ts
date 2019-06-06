import { TestBed } from '@angular/core/testing';

import { InterceptorUsuarioService } from './interceptor-usuario.service';

describe('InterceptorUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterceptorUsuarioService = TestBed.get(InterceptorUsuarioService);
    expect(service).toBeTruthy();
  });
});
