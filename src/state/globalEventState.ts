// Create a global state management solution for events
export class GlobalEventState {
    constructor() {
        this.events = [];
        console.log('Global event state initialized.');
    }
    addEvent(event) {
        this.events.push(event);
    }
}