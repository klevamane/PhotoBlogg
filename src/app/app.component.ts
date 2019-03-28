import { Component } from '@angular/core';

@Component({
    // This sets the selector in the placeholder of the index.html file where its indicated <app-root></app-root>
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    emoji = ['🙅🏼‍', '🙆🏼', '🙆🏼‍'];
    activeEmoji: string;
    changeEmoji() {
        this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)]
    }

}
