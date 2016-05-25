# Material Theme for Odoo

Material theme for the Odoo public website

## Development

The easiest way is to set up a python service in PyCharm.

First, poin to the odoo.py file as follows:

    ../odoo/odoo.py
    
Then set the following scrip parameters:

    --addons-path=./,../odoo-ecommerce,../odoo-enterprise,../odoo/addons --dev
    
Then make sure that the working directory is set to the location of this repo on your local disk drive.

Also make sure that the PATH variable refers to the less bindary, set `PATH` to `/usr/local/bin` in the PyCharm environment settings.