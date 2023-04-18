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
import type { GroupMembership } from './GroupMembership';
import {
    GroupMembershipFromJSON,
    GroupMembershipFromJSONTyped,
    GroupMembershipToJSON,
} from './GroupMembership';

/**
 * 
 * @export
 * @interface GroupsIdMembershipsPost201Response
 */
export interface GroupsIdMembershipsPost201Response {
    /**
     * 
     * @type {GroupMembership}
     * @memberof GroupsIdMembershipsPost201Response
     */
    groupMembership?: GroupMembership;
}

/**
 * Check if a given object implements the GroupsIdMembershipsPost201Response interface.
 */
export function instanceOfGroupsIdMembershipsPost201Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GroupsIdMembershipsPost201ResponseFromJSON(json: any): GroupsIdMembershipsPost201Response {
    return GroupsIdMembershipsPost201ResponseFromJSONTyped(json, false);
}

export function GroupsIdMembershipsPost201ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupsIdMembershipsPost201Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'groupMembership': !exists(json, 'groupMembership') ? undefined : GroupMembershipFromJSON(json['groupMembership']),
    };
}

export function GroupsIdMembershipsPost201ResponseToJSON(value?: GroupsIdMembershipsPost201Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'groupMembership': GroupMembershipToJSON(value.groupMembership),
    };
}

