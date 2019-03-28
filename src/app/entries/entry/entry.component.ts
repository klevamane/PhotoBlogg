import { Component } from '@angular/core';

@Component ({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {
    title: string = 'This is the title from the entry component';
    photo: string = 'http://placehold.it/800x500?text=Angula Basics';
    description: string = 'This is the description of my first photo';
}
