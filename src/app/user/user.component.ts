import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {
    @Input() user;

    isMarked = false;

    onClick() {
        console.log('onClick');
        this.isMarked = true;
    }
}
