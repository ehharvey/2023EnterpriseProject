# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from openapi_server.models.base_model_ import Model
from openapi_server import util


class User(Model):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.
    """

    def __init__(self, username=None, firstname=None, lastname=None, role='standard'):  # noqa: E501
        """User - a model defined in OpenAPI

        :param username: The username of this User.  # noqa: E501
        :type username: str
        :param firstname: The firstname of this User.  # noqa: E501
        :type firstname: str
        :param lastname: The lastname of this User.  # noqa: E501
        :type lastname: str
        :param role: The role of this User.  # noqa: E501
        :type role: str
        """
        self.openapi_types = {
            'username': str,
            'firstname': str,
            'lastname': str,
            'role': str
        }

        self.attribute_map = {
            'username': 'username',
            'firstname': 'firstname',
            'lastname': 'lastname',
            'role': 'role'
        }

        self._username = username
        self._firstname = firstname
        self._lastname = lastname
        self._role = role

    @classmethod
    def from_dict(cls, dikt) -> 'User':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The user of this User.  # noqa: E501
        :rtype: User
        """
        return util.deserialize_model(dikt, cls)

    @property
    def username(self):
        """Gets the username of this User.

        the user's username.  # noqa: E501

        :return: The username of this User.
        :rtype: str
        """
        return self._username

    @username.setter
    def username(self, username):
        """Sets the username of this User.

        the user's username.  # noqa: E501

        :param username: The username of this User.
        :type username: str
        """

        self._username = username

    @property
    def firstname(self):
        """Gets the firstname of this User.

        the user's first name.  # noqa: E501

        :return: The firstname of this User.
        :rtype: str
        """
        return self._firstname

    @firstname.setter
    def firstname(self, firstname):
        """Sets the firstname of this User.

        the user's first name.  # noqa: E501

        :param firstname: The firstname of this User.
        :type firstname: str
        """

        self._firstname = firstname

    @property
    def lastname(self):
        """Gets the lastname of this User.

        the user's last name.  # noqa: E501

        :return: The lastname of this User.
        :rtype: str
        """
        return self._lastname

    @lastname.setter
    def lastname(self, lastname):
        """Sets the lastname of this User.

        the user's last name.  # noqa: E501

        :param lastname: The lastname of this User.
        :type lastname: str
        """

        self._lastname = lastname

    @property
    def role(self):
        """Gets the role of this User.

        the user's role.  # noqa: E501

        :return: The role of this User.
        :rtype: str
        """
        return self._role

    @role.setter
    def role(self, role):
        """Sets the role of this User.

        the user's role.  # noqa: E501

        :param role: The role of this User.
        :type role: str
        """
        allowed_values = ["standard", "admin"]  # noqa: E501
        if role not in allowed_values:
            raise ValueError(
                "Invalid value for `role` ({0}), must be one of {1}"
                .format(role, allowed_values)
            )

        self._role = role
