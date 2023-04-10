# coding: utf-8

from __future__ import annotations
from datetime import date, datetime  # noqa: F401

import re  # noqa: F401
from typing import Any, Dict, List, Optional  # noqa: F401

from pydantic import AnyUrl, BaseModel, EmailStr, Field, validator  # noqa: F401


class UserAllOf(BaseModel):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.

    UserAllOf - a model defined in OpenAPI

        id: The id of this UserAllOf.
        created_at: The created_at of this UserAllOf.
        last_updated_at: The last_updated_at of this UserAllOf.
    """

    id: str = Field(alias="id")
    created_at: datetime = Field(alias="createdAt")
    last_updated_at: datetime = Field(alias="lastUpdatedAt")

    @validator("id")
    def id_pattern(cls, value):
        assert value is not None and re.match(r"^[a-z]+-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$", value)
        return value

UserAllOf.update_forward_refs()
