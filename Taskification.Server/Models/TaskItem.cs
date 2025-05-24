using System.ComponentModel.DataAnnotations;

namespace Taskification.Server.Models;

public class TaskItem
{
    [Key]
    public int TaskId { get; set; }
    public string Name { get; set; }
    public bool IsCompleted { get; set; }
}