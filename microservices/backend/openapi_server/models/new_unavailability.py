# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server.models.update_unavailability_owner import UpdateUnavailabilityOwner
import re
from openapi_server import util

from openapi_server.models.update_unavailability_owner import UpdateUnavailabilityOwner  # noqa: E501
import re  # noqa: E501

class NewUnavailability(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, item=None, start_date=None, end_date=None, owner=None, type=None):  # noqa: E501
        """NewUnavailability - a model defined in OpenAPI

        :param item: The item of this NewUnavailability.  # noqa: E501
        :type item: str
        :param start_date: The start_date of this NewUnavailability.  # noqa: E501
        :type start_date: str
        :param end_date: The end_date of this NewUnavailability.  # noqa: E501
        :type end_date: str
        :param owner: The owner of this NewUnavailability.  # noqa: E501
        :type owner: str
        :param type: The type of this NewUnavailability.  # noqa: E501
        :type type: str
        """
        self.openapi_types = {
            'item': str,
            'start_date': str,
            'end_date': str,
            'owner': str,
            'type': str
        }

        self.attribute_map = {
            'item': 'item',
            'start_date': 'startDate',
            'end_date': 'endDate',
            'owner': 'owner',
            'type': 'type'
        }

        self._item = item
        self._start_date = start_date
        self._end_date = end_date
        self._owner = owner
        self._type = type

    @classmethod
    def from_dict(cls, dikt) -> 'NewUnavailability':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The newUnavailability of this NewUnavailability.  # noqa: E501
        :rtype: NewUnavailability
        """
        return util.deserialize_model(dikt, cls)

    @property
    def item(self):
        """Gets the item of this NewUnavailability.

        the id of the item. this is a uuid with a prefix of \"item-\".   # noqa: E501

        :return: The item of this NewUnavailability.
        :rtype: str
        """
        return self._item

    @item.setter
    def item(self, item):
        """Sets the item of this NewUnavailability.

        the id of the item. this is a uuid with a prefix of \"item-\".   # noqa: E501

        :param item: The item of this NewUnavailability.
        :type item: str
        """
        if item is None:
            raise ValueError("Invalid value for `item`, must not be `None`")  # noqa: E501
        if item is not None and not re.search(r'^[a-z]+-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$', item):  # noqa: E501
            raise ValueError("Invalid value for `item`, must be a follow pattern or equal to `/^[a-z]+-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/`")  # noqa: E501

        self._item = item

    @property
    def start_date(self):
        """Gets the start_date of this NewUnavailability.

        date-time string with 15-minute interval, e.g., 2023-04-02t12:00:00  # noqa: E501

        :return: The start_date of this NewUnavailability.
        :rtype: str
        """
        return self._start_date

    @start_date.setter
    def start_date(self, start_date):
        """Sets the start_date of this NewUnavailability.

        date-time string with 15-minute interval, e.g., 2023-04-02t12:00:00  # noqa: E501

        :param start_date: The start_date of this NewUnavailability.
        :type start_date: str
        """
        if start_date is None:
            raise ValueError("Invalid value for `start_date`, must not be `None`")  # noqa: E501
        if start_date is not None:  # noqa: E501
            raise ValueError("Invalid value for `start_date`, must be a follow pattern or equal to `/^[0-9]{4}-[0-9]{2}-[0-9]{2}t([01][0-9]|2[0-3]):(00|15|30|45):00$/`")  # noqa: E501

        self._start_date = start_date

    @property
    def end_date(self):
        """Gets the end_date of this NewUnavailability.

        date-time string with 15-minute interval, e.g., 2023-04-02t12:00:00  # noqa: E501

        :return: The end_date of this NewUnavailability.
        :rtype: str
        """
        return self._end_date

    @end_date.setter
    def end_date(self, end_date):
        """Sets the end_date of this NewUnavailability.

        date-time string with 15-minute interval, e.g., 2023-04-02t12:00:00  # noqa: E501

        :param end_date: The end_date of this NewUnavailability.
        :type end_date: str
        """
        if end_date is None:
            raise ValueError("Invalid value for `end_date`, must not be `None`")  # noqa: E501
        if end_date is not None and not re.search(r'^[0-9]{4}-[0-9]{2}-[0-9]{2}[tT]([01][0-9]|2[0-3]):(00|15|30|45):00$', end_date):  # noqa: E501
            raise ValueError("Invalid value for `end_date`, must be a follow pattern or equal to `/^[0-9]{4}-[0-9]{2}-[0-9]{2}t([01][0-9]|2[0-3]):(00|15|30|45):00$/`")  # noqa: E501

        self._end_date = end_date

    @property
    def owner(self):
        """Gets the owner of this NewUnavailability.


        :return: The owner of this NewUnavailability.
        :rtype: UpdateUnavailabilityOwner
        """
        return self._owner

    @owner.setter
    def owner(self, owner):
        """Sets the owner of this NewUnavailability.


        :param owner: The owner of this NewUnavailability.
        :type owner: str
        """

        self._owner = owner

    @property
    def type(self):
        """Gets the type of this NewUnavailability.


        :return: The type of this NewUnavailability.
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this NewUnavailability.


        :param type: The type of this NewUnavailability.
        :type type: str
        """
        allowed_values = ["maintenance", "booking", "offHours", "other"]  # noqa: E501
        if type not in allowed_values:
            raise ValueError(
                "Invalid value for `type` ({0}), must be one of {1}"
                .format(type, allowed_values)
            )

        self._type = type
