const utils = require('../utils');

module.exports = {
    labels: ['Store'],
    uuid: {
        type: 'uuid',
        primary:true,
    },
    name:{
        type:'string',
        required: true,
    },
    created_at: {
        type: 'datetime',
        default: utils.datetime_now()
    },
    updated_at: {
        type: 'datetime',
        default: utils.datetime_now()
    },
    location: 'point', // input format {"x": 1.45, "y": 31.45}

    in_category: {
        type: "relationship",
        target: "Category",
        relationship: "IN_CATEGORY",
        direction: "out",
        properties: {
            uuid: {
                type: 'uuid',
            },
            created_at: {
                type: 'datetime',
                default: utils.datetime_now()
            },
        }
    },
    is_in: {
        type: "relationship",
        target: "Mall",
        relationship: "IS_IN",
        direction: "out",
        properties: {
            uuid: {
                type: 'uuid',
            },
            created_at: {
                type: 'datetime',
                default: utils.datetime_now()
            },
        }
    }
};
