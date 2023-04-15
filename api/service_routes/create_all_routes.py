from pathlib import Path
import pprint
import yaml
import os

# get the directory path of the current script
script_dir = os.path.dirname(os.path.abspath(__file__))

# set the working directory to be the script directory
os.chdir(script_dir)


files = [
    Path("group.yaml"),
    Path("item.yaml"),
    Path("unavailability.yaml"),
    Path("user.yaml"),
]

boilerplate = """---
# DO NOT MODIFY THIS FILE BY HAND
# IT IS AUTO GENERATED BY create_all.py
"""

output_dict = {
    "openapi": "3.0.2",
    "info": {
        "title": "Main API",
        "version": "0.0.1",
    },
    "servers": [{"url": "https://reserva.emilharvey.ca"}],
    "paths": {},
    "components": {
        "schemas": {
            "$ref": "../schemas/_all.yaml",
            "securitySchemes": {
                "$ref": "../security/_all.yaml",
            },
        }
    },
}

for file in files:
    with open(file, "r") as file:
        file_dict = yaml.safe_load(file)

        for path in file_dict["paths"]:
            for method in file_dict["paths"][path]:
                if method == "parameters":
                    continue

                file_dict["paths"][path][method]["tags"] = [file.name[:-5]]

        for key, value in file_dict["paths"].items():
            output_dict["paths"][key] = value

with open("_all.yaml", "w") as output:
    output.write(boilerplate)
    output.write(yaml.dump(output_dict))
