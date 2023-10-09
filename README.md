# @nitrophenol/projectile

The `@nitrophenol/projectile` package is designed to facilitate precise analysis of projectile motion. It provides functions for performing calculations related to trajectory, range, maximum height, time of flight, velocity components, and displacement. This package serves as a valuable resource for professionals, educators, and enthusiasts in fields such as physics and engineering.

## Installation

To install the package, you can use npm with the following command:

```bash
npm install @nitrophenol/projectile

Here's an example of how to use the package in your JavaScript code:


const projectile = require('@nitrophenol/projectile');

const initialVelocity = 30; // m/s
const launchAngle = 45; // degrees

const range = projectile.calculateRange(initialVelocity, launchAngle);
console.log('Range:', range, 'm');

const maxHeight = projectile.calculateMaxHeight(initialVelocity, launchAngle);
console.log('Maximum Height:', maxHeight, 'm');

const timeOfFlight = projectile.calculateTimeOfFlight(initialVelocity, launchAngle);
console.log('Time of Flight:', timeOfFlight, 's');

const velocityX = projectile.calculateVelocityX(initialVelocity, launchAngle);
console.log('Horizontal Velocity:', velocityX, 'm/s');

const time = 2.5; // seconds
const velocityY = projectile.calculateVelocityY(initialVelocity, launchAngle, time);
console.log('Vertical Velocity at', time, 's:', velocityY, 'm/s');

const [displacementX, displacementY] = projectile.calculateProjectileDisplacement(initialVelocity, launchAngle, time);
console.log('Displacement at', time, 's:', displacementX, 'm', displacementY, 'm');

const trajectoryEquation = projectile.getProjectileTrajectoryEquation(initialVelocity, launchAngle);
console.log('Trajectory Equation:', trajectoryEquation);

Functions
calculateRange(initialVelocity, launchAngle, gravity): Calculates the range of the projectile.
calculateMaxHeight(initialVelocity, launchAngle, gravity): Calculates the maximum height reached by the projectile.
calculateTimeOfFlight(initialVelocity, launchAngle, gravity): Calculates the time of flight of the projectile.
calculateVelocityX(v0, theta): Calculates the horizontal velocity component.
calculateVelocityY(v0, theta, t, gravity): Calculates the vertical velocity component at a given time.
calculateProjectileDisplacement(v0, angle, time, gravity): Calculates the horizontal and vertical displacements of the projectile.
getProjectileTrajectoryEquation(v0, angle, gravity): Generates the quadratic equation describing the trajectory.

Note
This documentation provides a basic overview of the capabilities of the @nitrophenol/projectile package. For detailed information on each function and its parameters, please refer to the package's source code and comments.

For more information and updates, you can visit the GitHub repository.


You can customize this `README.md` file with additional information, examples, or usage instructions specific to your package. Make sure to replace the GitHub repository link with the actual link to your repository.




