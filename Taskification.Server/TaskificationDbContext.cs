using Microsoft.EntityFrameworkCore;
using Taskification.Server.Models;

namespace Taskification.Server;

public class TaskificationDbContext : DbContext
{
    public DbSet<TaskItem> Tasks { get; set; }
    
    public TaskificationDbContext(DbContextOptions<TaskificationDbContext> options) : base(options)
    {
        
    }
}