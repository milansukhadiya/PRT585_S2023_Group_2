-- 创建 Users 表
CREATE TABLE Users (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    Gender TEXT NOT NULL,
    Email TEXT NOT NULL
);

-- 插入数据
INSERT INTO Users (Id, Name, Gender, Email) VALUES (10, 'Tony', 'Female', 'Tony@gmail.com');
INSERT INTO Users (Id, Name, Gender, Email) VALUES (12, 'Magma', 'Male', 'Magma@gmail.com');
INSERT INTO Users (Id, Name, Gender, Email) VALUES (13, 'Joan', 'Male', 'Joan@qq.com');
INSERT INTO Users (Id, Name, Gender, Email) VALUES (14, 'Linda', 'Male', 'Linda@qq.com');
INSERT INTO Users (Id, Name, Gender, Email) VALUES (15, 'Ross', 'Male', 'Ross@163.com');
