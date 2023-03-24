const mongoose = require('mongoose');

var tableSchema = mongoose.Schema({
    slug: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    linkUrl: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    imageUrl: {
        type: String
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive']
    },
    order: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

tableSchema.index({slug: 1, status: 1}, { background: true, name: 'slugOrderIndex' });

let Article = mongoose.model('Article', tableSchema);