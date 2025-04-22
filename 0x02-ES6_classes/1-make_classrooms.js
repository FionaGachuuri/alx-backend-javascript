import ClassRoom from './0-classroom';
/**
 * Initializes an array of 3 ClassRoom objects with different maxStudentsSize
 * @returns {Array} An array of ClassRoom objects
 */
export default function initializeRooms() {
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);
  return [room1, room2, room3];
}
