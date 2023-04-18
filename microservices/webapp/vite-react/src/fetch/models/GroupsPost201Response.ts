/* tslint:disable */
/* eslint-disable */
/**
 * Main API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Group } from './Group';
import {
    GroupFromJSON,
    GroupFromJSONTyped,
    GroupToJSON,
} from './Group';

/**
 * 
 * @export
 * @interface GroupsPost201Response
 */
export interface GroupsPost201Response {
    /**
     * 
     * @type {Group}
     * @memberof GroupsPost201Response
     */
    group?: Group;
}

/**
 * Check if a given object implements the GroupsPost201Response interface.
 */
export function instanceOfGroupsPost201Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GroupsPost201ResponseFromJSON(json: any): GroupsPost201Response {
    return GroupsPost201ResponseFromJSONTyped(json, false);
}

export function GroupsPost201ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupsPost201Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'group': !exists(json, 'group') ? undefined : GroupFromJSON(json['group']),
    };
}

export function GroupsPost201ResponseToJSON(value?: GroupsPost201Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'group': GroupToJSON(value.group),
    };
}

