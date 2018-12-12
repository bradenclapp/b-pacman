import {Component, HostListener, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Pacman} from '../models/Pacman';
import {Constants, CONTROLS} from '../constants';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
    selector: 'app-pacman-character',
    templateUrl: './pacman-character.html',
    styleUrls: ['./pacman-character.scss']
})
export class PacmanCharacterComponent implements OnInit {
    title = 'b-pacman';

    pacManChar: Pacman;
    keydown = false;
    keyDownInterval = 0;



    constructor(sanitizer: DomSanitizer) {
        this.pacManChar = new Pacman();
    }

    @HostListener('window:keydown', ['$event'])
    keyEvent(event: KeyboardEvent) {
        console.log('keydown', event);
        this.keydown = true;

        if (event.code === CONTROLS.RIGHT) {
            this.pacManChar.moveRight();
        } else if (event.code === CONTROLS.LEFT) {
            this.pacManChar.moveLeft();
        } else if (event.code === CONTROLS.DOWN) {
            this.pacManChar.moveDown();
        } else if (event.code === CONTROLS.UP) {
            this.pacManChar.moveUp();
        }

    }


    @HostListener('window:keyup', ['$event'])
    keyEvent1(event: KeyboardEvent) {
        console.log('keyup');

       this.keydown = false;
    }

    ngOnInit(): void {
        console.log(this.pacManChar);
        this.pacManChar.startAnimation();
        console.log(this.pacManChar.getCurrentPic());
    }



}
