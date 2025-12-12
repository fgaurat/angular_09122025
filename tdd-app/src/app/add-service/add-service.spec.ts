import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddService as SumService} from '../add-service';

import { AddService } from './add-service';

describe('AddService', () => {
  let component: AddService;
  let fixture: ComponentFixture<AddService>;
  let service:SumService

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
