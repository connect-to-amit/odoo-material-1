# noinspection PyStatementEffect
{
    'name': 'Agrista Material Theme',
    'summary': 'Material themes for the website frontend',
    'description': 'This theme module provides material design components for the website frontend.',
    'category': 'Theme',
    'sequence': 900,
    'version': '1.0',
    'depends': ['website'],
    'data': [
        'views/theme.xml',
        'views/options.xml',
        'views/templates.xml',
        'views/snippets.xml',
        'views/snippets/header_carousel.xml',
        'views/snippets/header_page.xml',
    ],
    'images': ['static/description/material.png'],
    'application': False,
}
