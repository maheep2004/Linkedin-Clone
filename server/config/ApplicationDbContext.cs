using Microsoft.EntityFrameworkCore;

namespace linkedin_clone_v1
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // Add DbSets for your entities
        public DbSet<User> Users { get; set; }
    }
}
