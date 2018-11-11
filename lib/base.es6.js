class Base {
    constructor(options) {
        this._events = {}
    }

    on(eventName, fn) {
        if (!this._events[eventName]) this._events[eventName] = []
        this._events[eventName].push(fn)
    }

    trigger(eventName, options) {
        if (this._events[eventName]) this._events[eventName].forEach(fn => fn.call(this, options))
    }
}

module.exports = Base