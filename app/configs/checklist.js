export default [

    {
        header: 'scrub',
        items: {
            'stovetop': 0,
            'wall behind stovetop': 0,
            'kitchen sink': 0,
            'microwave (inside & out)': 0,
            'toaster (inside & out)': 0,
            'load & run dishwasher (1 load) or Empty dishwasher if client left note': 0,
            'bathtub/shower': 0,
            'bathroom tiles': 0,
            'bathroom sinks': 0,
            'toilet': 0,
            'heavy scrub of bathtub/shower': 1,
            'heavy scrub of bathroom tiles': 1,
            'heavy scrub of bathroom sinks': 1,
            'stain removal': 1
        }
    },

    {

        header: 'wipe down',
        items: {
            'kitchen counters': 0,
            'kitchen cabinets (exterior)': 0,
            'refrigerator (exterior, including top)': 0,
            'table tops': 0,
            'bathroom counters': 0,
            'bathroom shelves (exterior)': 0,
            'shower door': 0,
            'shower caddy/soap dish': 0,
            'bathroom mirror': 0,
            'trash cans (exterior)': 0,
            'window sills': 0,
            'under A/C unit': 0,
            'trashcans (inside & out)': 1,
            'shelves': 1,
            'blinds': 1
        }
    },

    {
        header:  'dust',
        items: {
            'lighting fixtures': 0,
            'vents': 0,
            'tv & other monitors (not screens)': 0,
            'fans': 0,
            'door frames': 0,
            'picture frames': 0,
            'tables & chairs': 0,
            'shelves': 0,
            'blinds': 0,
            'behind wall units': 1,
        }
    },

    {
    
        header: 'floors & baseboards',
        items: {
            'vacuum (if provided)': 0,
            'dry mopping': 0,
            'wet mopping': 0,
            'wipe down baseboards': 1
        }
    },

    {
        header: 'before we leave',
        items: {
            'change bedding & make beds': 0,
            'return supplies': 0,
            'straighten up': 0,
            'empty trash/recycling & replace liners': 0,
            'turn off lights & A/C unit': 0,
            'offer walk-through (if applicable)': 0
        }
    },

    {
        header: 'add-ons',
        items: {
            'extended time for areas of focus': 1,
            'inside oven': 2,
            'inside refrigerator': 2,
            'inside cabinets': 2
        }
    }
];
