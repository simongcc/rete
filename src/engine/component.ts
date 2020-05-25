import { Engine } from './index';
import { NodeData, WorkerInputs, WorkerOutputs } from '../core/data';

export abstract class Component {

    name: string;
    data: unknown = {};
    engine: Engine | null = null;

    constructor(name: string) {
        this.name = name;
    }

    /**
     * process data
     * 
     * eg. json data
     * 
     */
    abstract worker(node: NodeData, inputs: WorkerInputs, outputs: WorkerOutputs, ...args: unknown[]): void;
}