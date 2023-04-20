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
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface UsersMeGet200Response
 */
export interface UsersMeGet200Response {
    /**
     * 
     * @type {User}
     * @memberof UsersMeGet200Response
     */
    user?: User;
}

/**
 * Check if a given object implements the UsersMeGet200Response interface.
 */
export function instanceOfUsersMeGet200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UsersMeGet200ResponseFromJSON(json: any): UsersMeGet200Response {
    return UsersMeGet200ResponseFromJSONTyped(json, false);
}

export function UsersMeGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersMeGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': !exists(json, 'user') ? undefined : UserFromJSON(json['user']),
    };
}

export function UsersMeGet200ResponseToJSON(value?: UsersMeGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': UserToJSON(value.user),
    };
}

