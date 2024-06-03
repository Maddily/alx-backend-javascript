export default function createInt8TypedArray(length, position, value) {
  const { buffer } = new Int8Array(length);

  const dataView = new DataView(buffer);
  dataView.setInt8(position, value);

  if (dataView.getInt8(position) !== value) console.log('Position outside range');

  return dataView;
}
