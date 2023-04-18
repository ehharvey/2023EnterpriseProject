# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
import re
from openapi_server import util

import re  # noqa: E501

class ItemAllOf(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, id=None, createDate=None, lastUpdateDate=None):  # noqa: E501
        """ItemAllOf - a model defined in OpenAPI

        :param id: The id of this ItemAllOf.  # noqa: E501
        :type id: str
        :param createDate: The createDate of this ItemAllOf.  # noqa: E501
        :type createDate: datetime
        :param lastUpdateDate: The lastUpdateDate of this ItemAllOf.  # noqa: E501
        :type lastUpdateDate: datetime
        """
        self.openapi_types = {
            'id': str,
            'createDate': datetime,
            'lastUpdateDate': datetime
        }

        self.attribute_map = {
            'id': 'id',
            'createDate': 'createDate',
            'lastUpdateDate': 'lastUpdateDate'
        }

        self._id = id
        self._createdat = createDate
        self._lastupdatedat = lastUpdateDate

    @classmethod
    def from_dict(cls, dikt) -> 'ItemAllOf':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The item_allOf of this ItemAllOf.  # noqa: E501
        :rtype: ItemAllOf
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self):
        """Gets the id of this ItemAllOf.

        the id of the item. this is a uuid with a prefix of \"item-\".   # noqa: E501

        :return: The id of this ItemAllOf.
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this ItemAllOf.

        the id of the item. this is a uuid with a prefix of \"item-\".   # noqa: E501

        :param id: The id of this ItemAllOf.
        :type id: str
        """
        if id is None:
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501
        if id is not None and not re.search(r'^[a-z]+-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$', id):  # noqa: E501
            raise ValueError("Invalid value for `id`, must be a follow pattern or equal to `/^[a-z]+-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/`")  # noqa: E501

        self._id = id

    @property
    def createDate(self):
        """Gets the createDate of this ItemAllOf.

        the date and time the item was created.  # noqa: E501

        :return: The createDate of this ItemAllOf.
        :rtype: datetime
        """
        return self._createdat

    @createDate.setter
    def createDate(self, createDate):
        """Sets the createDate of this ItemAllOf.

        the date and time the item was created.  # noqa: E501

        :param createDate: The createDate of this ItemAllOf.
        :type createDate: datetime
        """

        self._createdat = createDate

    @property
    def lastUpdateDate(self):
        """Gets the lastUpdateDate of this ItemAllOf.

        the date and time the item was last updated.  # noqa: E501

        :return: The lastUpdateDate of this ItemAllOf.
        :rtype: datetime
        """
        return self._lastupdatedat

    @lastUpdateDate.setter
    def lastUpdateDate(self, lastUpdateDate):
        """Sets the lastUpdateDate of this ItemAllOf.

        the date and time the item was last updated.  # noqa: E501

        :param lastUpdateDate: The lastUpdateDate of this ItemAllOf.
        :type lastUpdateDate: datetime
        """

        self._lastupdatedat = lastUpdateDate
