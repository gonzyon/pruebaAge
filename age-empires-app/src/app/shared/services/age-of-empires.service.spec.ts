import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { AgeOfEmpiresService } from './age-of-empires.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('AgeOfEmpiresService', () => {
  let service: AgeOfEmpiresService;
  let httpTestingController: HttpTestingController;
  let result: any;
  const url = 'https://age-of-empires-2-api.herokuapp.com/api/v1';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(()=>{
    service = TestBed.get(AgeOfEmpiresService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    expect(service).toBeTruthy();
  });

  it('getCivilizations excecute ok', fakeAsync(() => {
    const response = { civilizations: 1};

    service.getCivilizations().subscribe(
      res => {
        result = res;
      },
      error => {
        console.log(error)
      }
    );

    const req = httpTestingController.expectOne(
      url + '/civilizations'
    );
    req.flush(response);
    tick();

    expect(req.request.method).toEqual('GET');
    expect(result).toEqual({ civilizations: 1 });
  }));
});
