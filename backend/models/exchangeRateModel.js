import mongoose from "mongoose";

const exchangeRateSchema = mongoose.Schema({
    base: {
        type: String,
        required: true,
    },
    rates: {
        type: Map,
        of: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export const ExchangeRateModel = mongoose.model("ExchangeRate", exchangeRateSchema);