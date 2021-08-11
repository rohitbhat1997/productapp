import { ElementRef } from '@angular/core';
import { AlphabetOnlyDirective } from './alphabet-only.directive';

describe('AlphabetOnlyDirective', () => {
  let mockElementRef: ElementRef;
  it('should create an instance', () => {
    const directive = new AlphabetOnlyDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
