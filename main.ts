robot.onLineLeftRightDetected(true, true, function () {
    robot.motorTank(100, 100)
})
robot.onLineLeftRightDetected(false, true, function () {
    robot.motorTank(100, 0)
})
robot.onObstacleDistanceChanged(function () {
	
})
robot.onLineLeftRightDetected(true, false, function () {
    robot.motorTank(0, 100)
})
robot.elecfreaksCuteBot.start()
robot.calibrate()
basic.forever(function () {
    if (robot.obstacleDistance() < 10) {
        robot.motorTank(0, 0)
        robot.motorSteer(180, -100)
    } else {
        robot.setAssist(RobotAssist.LineFollowing, true)
    }
})
