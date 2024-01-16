export function generateUserCode(prefix, fullName) {
  const initial = fullName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  const now = new Date();
  const timestamp = `${now.getFullYear()}${(now.getMonth() + 1)
    .toString()
    .padStart(2, 0)}${now.getDate().toString().padStart(2, 0)}${now
    .getHours()
    .toString()
    .padStart(2, 0)}${now.getMinutes().toString().padStart(2, 0)}${now
    .getSeconds()
    .toString()
    .padStart(2, 0)}`;

  const userCode = `${prefix}-${initial}-${timestamp}`;

  return userCode;
}
