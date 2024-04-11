import mongoose, { mongo } from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
      enum: {
        values: ['Male', 'Female', 'Other'],
        message: 'You can select only Male, Female or Other',
      },
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
    diagnosedWith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);
