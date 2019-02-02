class EventDispatcher {
    private constructor() {
        // Stub
    }

    public static dispatch (name: string, evt: Event) {
        const event = new Event(name);
        document.dispatchEvent(event);
    }
}

export default EventDispatcher;
