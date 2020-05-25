// import component from engine folder
import { Component } from '../engine/component';

export class Events {

    handlers: {};

   /**
    * Return an events object with property `handlers` by setting up the type of property inside `handlers`
    *
    * @class Events
    * @classdesc the object `handlers` by concatenate with the given `handlers` object
    * @param handlers - event name
    *
    */
    constructor(handlers: {}) {
        this.handlers = {
            warn: [console.warn],
            error: [console.error],
            componentregister: [],
            destroy: [],
            ...handlers
        }
    }
}

/**
 * declare a new type `EventsTypes` and shape of it
 *
 */
export interface EventsTypes {
    warn: string | Error;
    error: string | Error;
    componentregister: Component;
    destroy: void;
}