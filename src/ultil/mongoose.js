module.exports = {
    multipleMongooseToObject: (mongooses) => {
        return mongooses.map((mongoose) => mongoose.toObject());
    },

    singleMongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
