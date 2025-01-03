import { TestBed } from '@angular/core/testing';
import { ReactiesComponent } from './reacties.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ReactiesComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ReactiesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mijnbaarmoederfaaltniet'`, () => {
    const fixture = TestBed.createComponent(ReactiesComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mijnbaarmoederfaaltniet');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ReactiesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('mijnbaarmoederfaaltniet app is running!');
  });
});