using Microsoft.AspNetCore.Mvc;
using Taskification.Server.Models;

namespace Taskification.Server.Controllers;
[ApiController]
[Route("api/[controller]")]

public class TaskController : ControllerBase
{
    private readonly TaskificationDbContext _context;

    public TaskController(TaskificationDbContext context)
    {
        _context = context;
    }

    [HttpPost("add-task")]
    public async Task<ActionResult<TaskItem>> AddTask([FromBody] TaskItem task)
    {
        _context.Tasks.Add(task);
        await _context.SaveChangesAsync();
        return Ok(task);
    }
}