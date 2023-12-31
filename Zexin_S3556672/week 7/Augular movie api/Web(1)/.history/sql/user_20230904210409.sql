USE TEST;

-- 如果Users表已经存在，则删除它
IF OBJECT_ID('dbo.Users', 'U') IS NOT NULL
  DROP TABLE dbo.Users;

-- 创建Users表
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Gender] [varchar](50) NOT NULL,
	[Email] [varchar](100) NOT NULL,
 CONSTRAINT [PK__Users__3214EC07818A2004] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY];

-- 插入数据到Users表
SET IDENTITY_INSERT [dbo].[Users] ON;

INSERT [dbo].[Users] ([Id], [Name], [Gender], [Email]) VALUES (10, N'Tony', N'Female', N'Tony@gmail.com');
INSERT [dbo].[Users] ([Id], [Name], [Gender], [Email]) VALUES (12, N'Magma', N'Male', N'Magma@gmail.com');
INSERT [dbo].[Users] ([Id], [Name], [Gender], [Email]) VALUES (13, N'Joan', N'Male', N'Joan@qq.com');
INSERT [dbo].[Users] ([Id], [Name], [Gender], [Email]) VALUES (14, N'Linda', N'Male', N'Linda@qq.com');
INSERT [dbo].[Users] ([Id], [Name], [Gender], [Email]) VALUES (15, N'Ross', N'Male', N'Ross@163.com');

SET IDENTITY_INSERT [dbo].[Users] OFF;
