CREATE TABLE `Students` (
  `student_id` int PRIMARY KEY,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `email` varchar(255),
  `date_of_birth` date
);

CREATE TABLE `Courses` (
  `course_id` int PRIMARY KEY,
  `course_name` varchar(255),
  `credit_hours` int
);

CREATE TABLE `Instructors` (
  `instructor_id` int PRIMARY KEY,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `email` varchar(255),
  `office_number` varchar(255)
);

CREATE TABLE `Departments` (
  `department_id` int PRIMARY KEY,
  `department_name` varchar(255),
  `location` varchar(255)
);

CREATE TABLE `Enrollments` (
  `enrollment_id` int PRIMARY KEY,
  `student_id` int,
  `course_id` int,
  `enrollment_date` date,
  `grade` varchar(255)
);

ALTER TABLE `Enrollments` ADD FOREIGN KEY (`student_id`) REFERENCES `Students` (`student_id`);

ALTER TABLE `Enrollments` ADD FOREIGN KEY (`course_id`) REFERENCES `Courses` (`course_id`);
