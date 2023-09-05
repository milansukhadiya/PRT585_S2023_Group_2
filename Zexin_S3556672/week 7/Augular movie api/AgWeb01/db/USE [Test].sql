USE [Test]
GO
/****** Object:  Table [dbo].[Movie]    Script Date: 2023/9/4 19:54:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Movie](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[ReleaseDate] [datetime] NOT NULL,
	[Director] [nvarchar](50) NOT NULL,
	[EmailAddress] [varchar](50) NOT NULL,
	[Language] [varchar](50) NOT NULL,
	[Category] [varchar](100) NOT NULL,
 CONSTRAINT [PK_Movie] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Movie] ON 

INSERT [dbo].[Movie] ([Id], [Name], [ReleaseDate], [Director], [EmailAddress], [Language], [Category]) VALUES (2, N'Test3', CAST(N'2023-09-07T16:00:00.000' AS DateTime), N'AAA3', N'AAA3@qq.com', N'Chinese', N'Drama')
SET IDENTITY_INSERT [dbo].[Movie] OFF
GO
