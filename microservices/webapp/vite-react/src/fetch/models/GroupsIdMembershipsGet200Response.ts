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
 * @interface GroupsIdMembershipsGet200Response
 */
export interface GroupsIdMembershipsGet200Response {
    /**
     * 
     * @type {Array<GroupMembership>}
     * @memberof GroupsIdMembershipsGet200Response
     */
    groupMemberships?: Array<GroupMembership>;
}

/**
 * Check if a given object implements the GroupsIdMembershipsGet200Response interface.
 */
export function instanceOfGroupsIdMembershipsGet200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GroupsIdMembershipsGet200ResponseFromJSON(json: any): GroupsIdMembershipsGet200Response {
    return GroupsIdMembershipsGet200ResponseFromJSONTyped(json, false);
}

export function GroupsIdMembershipsGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupsIdMembershipsGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'groupMemberships': !exists(json, 'groupMemberships') ? undefined : ((json['groupMemberships'] as Array<any>).map(GroupMembershipFromJSON)),
    };
}

export function GroupsIdMembershipsGet200ResponseToJSON(value?: GroupsIdMembershipsGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'groupMemberships': value.groupMemberships === undefined ? undefined : ((value.groupMemberships as Array<any>).map(GroupMembershipToJSON)),
    };
}

