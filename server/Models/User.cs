using System.ComponentModel.DataAnnotations;

public class User
{
    [Key]
    public Guid Id { get; set; }

    [Required]
    public string OAuthUserId { get; set; } = string.Empty; // Initialized with a default value

    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty; // Initialized with a default value

    [Required]
    public string Name { get; set; } = string.Empty; // Initialized with a default value

    public string ProfilePicture { get; set; } = string.Empty; // Initialized with a default value

    public string Provider { get; set; } = "google"; // Default provider is "google"
}
