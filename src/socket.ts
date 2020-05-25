/**
 * Sockets are used to determine which inputs and outputs can be connected to each other. 
 * They are responsible for the type of data that can be transferred from one node to another.
 * 
 * First of all, you must declare all the sockets to be used in the editor.
 * 
 * eg. const numSocket = new Rete.Socket('Number');
 * 
 * @remarks
 * The passed parameter must be unique. According to it, a CSS class will be created in the kebab-case format to which you can apply styles. eg. new Rete.Socket('Number Value'); where class name become .number-value
 * 
 * As a result, you can only connect the inputs and outputs with the same connectors. Although there may be situations when you need to connect different sockets. There is a `combineWith` method for this:
 * 
 * const anyTypeSocket = new Rete.Socket('Any type');
numSocket.combineWith(anyTypeSocket);
 * 
 */
export class Socket {

    name: string;
    data: unknown;
    compatible: Socket[] = [];

    constructor(name: string, data = {}) {
        this.name = name;
        this.data = data;
        this.compatible = [];
    }

    combineWith(socket: Socket) {
        this.compatible.push(socket);
    }

    compatibleWith(socket: Socket) {
        return this === socket || this.compatible.includes(socket);
    }
}