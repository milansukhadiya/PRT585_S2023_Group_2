using System.ComponentModel.DataAnnotations;

namespace Movie.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string? Name { get; set; }

        public string? Code { get; set; }
    }
}
