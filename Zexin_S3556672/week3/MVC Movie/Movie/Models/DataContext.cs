using Microsoft.EntityFrameworkCore;

namespace Movie.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<MovieInfo> MovieInfo { get; set; }
        public DbSet<Category> Category { get; set; }
    }
}
