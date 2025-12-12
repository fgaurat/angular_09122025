// import { TestBed } from '@angular/core/testing';

// import { AddHttp } from './add-http';

// describe('AddHttp', () => {
//   let service: AddHttp;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(AddHttp);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
  import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { HttpClient } from '@angular/common/http';
import { AddHttpService } from './add-http.service';
import { of } from 'rxjs';

describe('AddHttpService', () => {
  let service: AddHttpService;
  let httpClientSpy: { get: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    httpClientSpy = {
      get: vi.fn()
    };

    TestBed.configureTestingModule({
      providers: [
        AddHttpService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });

    service = TestBed.inject(AddHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the sum', () => {
    // Arrange
    const sum = 5;
    const a = 2;
    const b = 3;

    httpClientSpy.get.mockReturnValue(of(sum));

    // Act + Assert
    service.add(a, b).subscribe((r) => {
      expect(r).toEqual(sum);
    });

    expect(httpClientSpy.get).toHaveBeenCalledOnce();
    // si tu veux vérifier l’URL (comme ton commentaire) :
    // expect(httpClientSpy.get).toHaveBeenCalledWith(`${(service as any).apiUrl}?a=${a}&b=${b}`);
  });
});