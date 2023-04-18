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


import * as runtime from '../runtime';
import type {
  GroupsIdMembershipsGet200Response,
  GroupsIdMembershipsPost201Response,
  GroupsPost201Response,
  NewGroup,
  NewGroupMembership,
  UpdateGroup,
} from '../models';
import {
    GroupsIdMembershipsGet200ResponseFromJSON,
    GroupsIdMembershipsGet200ResponseToJSON,
    GroupsIdMembershipsPost201ResponseFromJSON,
    GroupsIdMembershipsPost201ResponseToJSON,
    GroupsPost201ResponseFromJSON,
    GroupsPost201ResponseToJSON,
    NewGroupFromJSON,
    NewGroupToJSON,
    NewGroupMembershipFromJSON,
    NewGroupMembershipToJSON,
    UpdateGroupFromJSON,
    UpdateGroupToJSON,
} from '../models';

export interface GroupsIdDeleteRequest {
    id: string;
}

export interface GroupsIdGetRequest {
    id: string;
}

export interface GroupsIdMembershipsGetRequest {
    id: string;
}

export interface GroupsIdMembershipsMembershipidDeleteRequest {
    id: string;
    membershipid: string;
}

export interface GroupsIdMembershipsMembershipidGetRequest {
    id: string;
    membershipid: string;
}

export interface GroupsIdMembershipsPostRequest {
    id: string;
    newGroupMembership?: NewGroupMembership;
}

export interface GroupsIdPutRequest {
    id: string;
    updateGroup?: UpdateGroup;
}

export interface GroupsPostRequest {
    newGroup?: NewGroup;
}

/**
 * 
 */
export class GroupApi extends runtime.BaseAPI {

    /**
     * deletes a group object
     * deletes a group object
     */
    async groupsIdDeleteRaw(requestParameters: GroupsIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupsPost201Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling groupsIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("standard", ["write:groups:me"]);
        }

        const response = await this.request({
            path: `/groups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupsPost201ResponseFromJSON(jsonValue));
    }

    /**
     * deletes a group object
     * deletes a group object
     */
    async groupsIdDelete(requestParameters: GroupsIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupsPost201Response> {
        const response = await this.groupsIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * gets a group object by id
     * gets a group object by id
     */
    async groupsIdGetRaw(requestParameters: GroupsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupsPost201Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling groupsIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("standard", ["read:groups:associated"]);
        }

        const response = await this.request({
            path: `/groups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupsPost201ResponseFromJSON(jsonValue));
    }

    /**
     * gets a group object by id
     * gets a group object by id
     */
    async groupsIdGet(requestParameters: GroupsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupsPost201Response> {
        const response = await this.groupsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * gets a list of groupMembership objects for a group
     * gets a list of groupMembership objects
     */
    async groupsIdMembershipsGetRaw(requestParameters: GroupsIdMembershipsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupsIdMembershipsGet200Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling groupsIdMembershipsGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("standard", ["read:groups:associated"]);
        }

        const response = await this.request({
            path: `/groups/{id}/memberships`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupsIdMembershipsGet200ResponseFromJSON(jsonValue));
    }

    /**
     * gets a list of groupMembership objects for a group
     * gets a list of groupMembership objects
     */
    async groupsIdMembershipsGet(requestParameters: GroupsIdMembershipsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupsIdMembershipsGet200Response> {
        const response = await this.groupsIdMembershipsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * deletes a groupMembership object
     * deletes a groupMembership object
     */
    async groupsIdMembershipsMembershipidDeleteRaw(requestParameters: GroupsIdMembershipsMembershipidDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling groupsIdMembershipsMembershipidDelete.');
        }

        if (requestParameters.membershipid === null || requestParameters.membershipid === undefined) {
            throw new runtime.RequiredError('membershipid','Required parameter requestParameters.membershipid was null or undefined when calling groupsIdMembershipsMembershipidDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("standard", ["write:groups:me", "write:groupMemberships:me"]);
        }

        const response = await this.request({
            path: `/groups/{id}/memberships/{membershipid}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"membershipid"}}`, encodeURIComponent(String(requestParameters.membershipid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * deletes a groupMembership object
     * deletes a groupMembership object
     */
    async groupsIdMembershipsMembershipidDelete(requestParameters: GroupsIdMembershipsMembershipidDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.groupsIdMembershipsMembershipidDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * gets a groupMembership object by id
     * gets a groupMembership object by id
     */
    async groupsIdMembershipsMembershipidGetRaw(requestParameters: GroupsIdMembershipsMembershipidGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupsIdMembershipsPost201Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling groupsIdMembershipsMembershipidGet.');
        }

        if (requestParameters.membershipid === null || requestParameters.membershipid === undefined) {
            throw new runtime.RequiredError('membershipid','Required parameter requestParameters.membershipid was null or undefined when calling groupsIdMembershipsMembershipidGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("standard", ["read:groups:associated"]);
        }

        const response = await this.request({
            path: `/groups/{id}/memberships/{membershipid}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"membershipid"}}`, encodeURIComponent(String(requestParameters.membershipid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupsIdMembershipsPost201ResponseFromJSON(jsonValue));
    }

    /**
     * gets a groupMembership object by id
     * gets a groupMembership object by id
     */
    async groupsIdMembershipsMembershipidGet(requestParameters: GroupsIdMembershipsMembershipidGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupsIdMembershipsPost201Response> {
        const response = await this.groupsIdMembershipsMembershipidGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * creates a new groupMembership object
     * creates a new groupMembership object
     */
    async groupsIdMembershipsPostRaw(requestParameters: GroupsIdMembershipsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupsIdMembershipsPost201Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling groupsIdMembershipsPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("standard", ["write:groups:me"]);
        }

        const response = await this.request({
            path: `/groups/{id}/memberships`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewGroupMembershipToJSON(requestParameters.newGroupMembership),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupsIdMembershipsPost201ResponseFromJSON(jsonValue));
    }

    /**
     * creates a new groupMembership object
     * creates a new groupMembership object
     */
    async groupsIdMembershipsPost(requestParameters: GroupsIdMembershipsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupsIdMembershipsPost201Response> {
        const response = await this.groupsIdMembershipsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * updates a group object
     * updates a group object
     */
    async groupsIdPutRaw(requestParameters: GroupsIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupsPost201Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling groupsIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("standard", ["write:groups:me"]);
        }

        const response = await this.request({
            path: `/groups/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateGroupToJSON(requestParameters.updateGroup),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupsPost201ResponseFromJSON(jsonValue));
    }

    /**
     * updates a group object
     * updates a group object
     */
    async groupsIdPut(requestParameters: GroupsIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupsPost201Response> {
        const response = await this.groupsIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * creates a new group object
     * creates a new group object
     */
    async groupsPostRaw(requestParameters: GroupsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GroupsPost201Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("standard", ["write:groups:me"]);
        }

        const response = await this.request({
            path: `/groups`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewGroupToJSON(requestParameters.newGroup),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupsPost201ResponseFromJSON(jsonValue));
    }

    /**
     * creates a new group object
     * creates a new group object
     */
    async groupsPost(requestParameters: GroupsPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GroupsPost201Response> {
        const response = await this.groupsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
