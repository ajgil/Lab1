import { Component, EventEmitter, Output } from '@angular/core';

// Decorador -- se el pasan los objetos selectos, template y estilos.
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})

export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>();
    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }

}
