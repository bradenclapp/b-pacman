import {Constants} from '../constants';

export class Pacman {


    public curPic = 'ghost-closed.png';
    public size = 20;
    public name = '';
    public left = 0;
    public top = 0;

    constructor() {
        this.name = 'jim';
        this.size = 20;
    }

    public startAnimation() {
        setInterval(() => { this.curPic = this.curPic === Constants.OPEN_MOUTH ? Constants.CLOSED_MOUTH : Constants.OPEN_MOUTH; }, 500);
    }

    getCurrentPic() {
        return this.curPic;
    }

    getSize() {
        return this.size;
    }

    moveRight() {
        this.left += 5;
    }

    moveLeft() {
        if (this.left >= 0) {
            this.left -= 5;
        }
    }

    moveDown() {
        this.top += 5;
    }

    moveUp() {
        if (this.top >= 0) {
            this.top -= 5;
        }
    }
}
