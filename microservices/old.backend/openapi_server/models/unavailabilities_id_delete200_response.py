# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server import util


class UnavailabilitiesIdDelete200Response(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, message=None):  # noqa: E501
        """UnavailabilitiesIdDelete200Response - a model defined in OpenAPI

        :param message: The message of this UnavailabilitiesIdDelete200Response.  # noqa: E501
        :type message: str
        """
        self.openapi_types = {
            'message': str
        }

        self.attribute_map = {
            'message': 'message'
        }

        self._message = message

    @classmethod
    def from_dict(cls, dikt) -> 'UnavailabilitiesIdDelete200Response':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The _unavailabilities__id__delete_200_response of this UnavailabilitiesIdDelete200Response.  # noqa: E501
        :rtype: UnavailabilitiesIdDelete200Response
        """
        return util.deserialize_model(dikt, cls)

    @property
    def message(self):
        """Gets the message of this UnavailabilitiesIdDelete200Response.


        :return: The message of this UnavailabilitiesIdDelete200Response.
        :rtype: str
        """
        return self._message

    @message.setter
    def message(self, message):
        """Sets the message of this UnavailabilitiesIdDelete200Response.


        :param message: The message of this UnavailabilitiesIdDelete200Response.
        :type message: str
        """

        self._message = message
