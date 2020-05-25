import { Component } from './component';
import { Connection } from './connection';
import { Control } from './control';
import { Emitter } from './core/emitter';
import { IO } from './io';
import { Input } from './input';
import { Node } from './node';
import { NodeEditor } from './editor';
import { Output } from './output';
import { Socket } from './socket';
import { Engine, Recursion } from './engine/index';

/**
 * export object individual to object in `rete.config.js` with name `Rete`
 * 
 * eg. Rete.Engine
 * 
 * eg. Rete.Recursion
 *
 */
export { Engine, Recursion } from './engine/index';
export { Component } from './component';
export { Control } from './control';
export { Connection } from './connection';
export { Emitter } from './core/emitter';
export { Input } from './input';
export { IO } from './io';
export { Node } from './node';
export { NodeEditor } from './editor';
export { Output } from './output';
export { Socket } from './socket';

/**
 * export object `default` without a given name to object in `rete.config.js` with name `Rete`
 * 
 * eg. Rete.default
 *
 */
export default {
    Engine,
    Recursion,
    Component,
    Control,
    Connection,
    Emitter,
    Input,
    IO,
    Node,
    NodeEditor,
    Output,
    Socket
}