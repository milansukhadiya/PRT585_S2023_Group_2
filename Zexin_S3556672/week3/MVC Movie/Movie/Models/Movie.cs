using System.ComponentModel.DataAnnotations;

namespace Movie.Models
{
    public class MovieInfo
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string? Name { get; set; }

        public DateTime ReleaseDate { get; set; }

        public string? Director { get; set; }

        public string? EmailAddress { get; set; }

        public string? Language { get; set; }
        public string? Category { get; set; }

    }
}
