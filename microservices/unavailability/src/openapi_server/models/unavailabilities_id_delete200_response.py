# coding: utf-8

from __future__ import annotations
from datetime import date, datetime  # noqa: F401

import re  # noqa: F401
from typing import Any, Dict, List, Optional  # noqa: F401

from pydantic import AnyUrl, BaseModel, EmailStr, Field, validator  # noqa: F401


class UnavailabilitiesIdDelete200Response(BaseModel):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.

    UnavailabilitiesIdDelete200Response - a model defined in OpenAPI

        message: The message of this UnavailabilitiesIdDelete200Response [Optional].
    """

    message: Optional[str] = Field(alias="message", default=None)

UnavailabilitiesIdDelete200Response.update_forward_refs()
