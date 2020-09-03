create table `User` (
  `id` int auto_increment primary key,
  `name` varchar(256)
);

create table `Post` (
  `id` int auto_increment primary key,
  `title` varchar(256),
  `author_id` int,
  constraint `author_fk` foreign key (`author_id`) references `User`(`id`) on delete cascade
);

create table `Profile` (
  `id` int auto_increment primary key,
  `userId` int unique,
  constraint `profile_fk` foreign key (`userId`) references `User`(`id`) on delete cascade
);