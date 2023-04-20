# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server.models.item import Item
from openapi_server import util

from openapi_server.models.item import Item  # noqa: E501

class ItemsPost201Response(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, room=None):  # noqa: E501
        """ItemsPost201Response - a model defined in OpenAPI

        :param room: The room of this ItemsPost201Response.  # noqa: E501
        :type room: Item
        """
        self.openapi_types = {
            'room': Item
        }

        self.attribute_map = {
            'room': 'room'
        }

        self._room = room

    @classmethod
    def from_dict(cls, dikt) -> 'ItemsPost201Response':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The _items_post_201_response of this ItemsPost201Response.  # noqa: E501
        :rtype: ItemsPost201Response
        """
        return util.deserialize_model(dikt, cls)

    @property
    def room(self):
        """Gets the room of this ItemsPost201Response.


        :return: The room of this ItemsPost201Response.
        :rtype: Item
        """
        return self._room

    @room.setter
    def room(self, room):
        """Sets the room of this ItemsPost201Response.


        :param room: The room of this ItemsPost201Response.
        :type room: Item
        """

        self._room = room
