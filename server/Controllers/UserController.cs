using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using linkedin_clone_v1; 

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly ApplicationDbContext _dbContext;

    public UserController(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    // POST api/user
    [HttpPost]
    public async Task<IActionResult> AddUser([FromBody] User user)
    {
        if (user == null)
        {
            return BadRequest("Invalid user data.");
        }

        _dbContext.Users.Add(user);
        await _dbContext.SaveChangesAsync();

        return Ok("User added successfully.");
    }

    // GET api/user
    [HttpGet]
    public async Task<IActionResult> GetUsers()
    {
        var users = await _dbContext.Users.ToListAsync();
        return Ok(users);
    }
}
