import mongoose from 'mongoose';

const MaskSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  use: {
    type: Number,
  },
  mask_name: {
    type: String,
  },
  user_name: {
    type: String,
  },
  status: {
    type: String,
  },
});

export default mongoose.model('Mask', MaskSchema);
