import { ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NumbersOnlyDirective } from './numbers-only.directive';

describe('NumbersOnlyDirective', () => {
  let mockRef: ElementRef;
  it('should create an instance', () => {
    const directive = new NumbersOnlyDirective(mockRef);
    expect(directive).toBeTruthy();
  });
});
