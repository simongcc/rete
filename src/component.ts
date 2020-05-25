import { Component as ComponentWorker } from './engine/component';
import { Node } from './node';
import { NodeEditor } from './editor';

/**
 * The components are designed to simplify development by combining the closely related functions of building and processing nodes.
 * 
 */
export abstract class Component extends ComponentWorker {

    editor: NodeEditor | null = null;
    data: unknown = {};

    constructor(name: string) {
        super(name);
    }

    /**
     * modify the node
     * 
     * eg. add output socket / input socket
     * 
     */
    abstract async builder(node: Node): Promise<void>;

    /**
     * editor.ts call it to add node and feeding data
     * 
     * eg. add output socket / input socket
     * 
     */
    async build(node: Node) {
        await this.builder(node);

        return node;
    }

    /**
     * @remarks
     * seems nothing is calling this function
     * 
     */
    async createNode(data = {}) {
        const node = new Node(this.name);
        
        node.data = data;
        await this.build(node);

        return node;
    }
}