import * as rx from 'rx';

export class EventEmitter {
    _subject;
    
    constructor() {
        this._subject    =   new rx.Subject;        
    }

    subject() {
        return this._subject;
    }

    emit({ identifier, value }) {
        this._subject.onNext({ identifier, value });
    }
}