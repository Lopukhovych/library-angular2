import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') ifOpen: boolean= false;

    @HostListener('click') toggleOpen(eventData: Event){
        this.ifOpen = !this.ifOpen;
    }
}