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
/**
 * 
 * @export
 * @interface GroupMembership
 */
export interface GroupMembership {
    /**
     * the id of a group. this is a uuid with the prefix "group-".
     * @type {string}
     * @memberof GroupMembership
     */
    group: string;
    /**
     * id of a user. This is just a string, since the user id is provided by the authentication provider. (in this case, auth0)
     * @type {string}
     * @memberof GroupMembership
     */
    user: string;
    /**
     * the id of a group membership.
     * @type {string}
     * @memberof GroupMembership
     */
    id?: string;
}

/**
 * Check if a given object implements the GroupMembership interface.
 */
export function instanceOfGroupMembership(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "group" in value;
    isInstance = isInstance && "user" in value;

    return isInstance;
}

export function GroupMembershipFromJSON(json: any): GroupMembership {
    return GroupMembershipFromJSONTyped(json, false);
}

export function GroupMembershipFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupMembership {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'group': json['group'],
        'user': json['user'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function GroupMembershipToJSON(value?: GroupMembership | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'group': value.group,
        'user': value.user,
        'id': value.id,
    };
}

