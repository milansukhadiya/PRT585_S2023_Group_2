﻿using _3BusinessLogicLayer.Interfaces;
using _3BusinessLogicLayer.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace _3BusinessLogicLayer.Ioc
{
    public static class Init
    {
        public static void InitializeDependencies(IServiceCollection services, IConfiguration configuration)
        {
                      
            // Services
            services.AddScoped<IPersonService, PersonService>();
            services.AddScoped<IStudentService, StudentService>();
            services.AddScoped<IEmployeeService, EmployeeService>();
            services.AddScoped<IUnitService, UnitService>();
            services.AddScoped<ICampusService, CampusService>();
            services.AddScoped<IEventService, EventService>();
            services.AddScoped<IEnrollmentService, EnrollmentService>();
            services.AddScoped<ISecurityService, SecurityService>();
            services.AddScoped<IClassroomService, ClassroomService>();
            services.AddScoped<IScoreService, ScoreService>();
            services.AddScoped<IUserAccountService, UserAccountService>();
            //services.AddScoped<ICategoryService, CategoryService>();

        }
    }
}
