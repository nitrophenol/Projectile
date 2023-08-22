function calculateRange(initialVelocity, launchAngle, gravity = 9.81) {
  const angleInRadians = (launchAngle * Math.PI) / 180; // Convert angle to radians
  const range =
    (Math.pow(initialVelocity, 2) * Math.sin(2 * angleInRadians)) / gravity; // Assuming g = 9.81 m/s²

  return range;
}

function calculateMaxHeight(initialVelocity, launchAngle, gravity = 9.81) {
  // Convert launch angle to radians
  const angleInRadians = (launchAngle * Math.PI) / 180;

  // Calculate the maximum height formula: H = (v^2 * sin^2(θ)) / (2 * g)
  const g = gravity; // Acceleration due to gravity in m/s^2
  const maxHeight =
    (Math.pow(initialVelocity, 2) * Math.pow(Math.sin(angleInRadians), 2)) /
    (2 * g);

  return maxHeight;
}

function calculateTimeOfFlight(initialVelocity, launchAngle, gravity = 9.81) {
  // Convert the launch angle to radians
  const angleInRadians = (launchAngle * Math.PI) / 180;

  // Calculate the time of flight using the formula: T = (2 * v0 * sin(θ)) / g
  const timeOfFlight =
    (2 * initialVelocity * Math.sin(angleInRadians)) / gravity;

  return timeOfFlight;
}

function calculateVelocityX(v0, theta) {
  // Convert the angle to radians
  const thetaRad = (theta * Math.PI) / 180;

  // Calculate the horizontal velocity
  const vx = v0 * Math.cos(thetaRad);

  return vx;
}

function calculateVelocityY(v0, theta, t, gravity = 9.81) {
  const g = gravity; // Acceleration due to gravity in m/s²
  const vy = v0 * Math.sin(theta) - g * t;
  return vy;
}

function calculateProjectileDisplacement(v0, angle, time, gravity = 9.81) {
  // Convert angle to radians
  const theta = angle * (Math.PI / 180);

  // Calculate horizontal and vertical displacements
  const dx = v0 * Math.cos(theta) * time;
  const dy = v0 * Math.sin(theta) * time - 0.5 * gravity * time * time;

  return [dx, dy];
}

function getProjectileTrajectoryEquation(v0, angle, gravity = 9.81) {
  // Convert angle to radians
  const theta = angle * (Math.PI / 180);

  // Calculate coefficients for quadratic equation
  const a = (-0.5 * gravity) / (v0 * v0 * Math.cos(theta) * Math.cos(theta));
  const b = Math.tan(theta);
  const c = 0;

  // Create the equation string
  const equation = `${a.toFixed(4)} * x^2 + ${b.toFixed(4)} * x + ${c.toFixed(
    4
  )}`;

  return equation;
}

module.exports = {
  calculateRange,
  calculateMaxHeight,
  calculateTimeOfFlight,
  calculateVelocityX,
  calculateVelocityY,
  calculateProjectileDisplacement,
  getProjectileTrajectoryEquation,
};
