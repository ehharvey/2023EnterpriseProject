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
 * this is a group membership. it is the intermediate object between a user and a group. it is used to determine which users are members of which groups.
 * @export
 * @interface NewGroupMembership
 */
export interface NewGroupMembership {
    /**
     * the id of a group. this is a uuid with the prefix "group-".
     * @type {string}
     * @memberof NewGroupMembership
     */
    group: string;
    /**
     * id of a user. This is just a string, since the user id is provided by the authentication provider. (in this case, auth0)
     * @type {string}
     * @memberof NewGroupMembership
     */
    user: string;
}

/**
 * Check if a given object implements the NewGroupMembership interface.
 */
export function instanceOfNewGroupMembership(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "group" in value;
    isInstance = isInstance && "user" in value;

    return isInstance;
}

export function NewGroupMembershipFromJSON(json: any): NewGroupMembership {
    return NewGroupMembershipFromJSONTyped(json, false);
}

export function NewGroupMembershipFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewGroupMembership {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'group': json['group'],
        'user': json['user'],
    };
}

export function NewGroupMembershipToJSON(value?: NewGroupMembership | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'group': value.group,
        'user': value.user,
    };
}

