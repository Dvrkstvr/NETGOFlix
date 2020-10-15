using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("MoviePhotos")]
    public class MovieImage
    {
        public int Id { get; set; }

        public string Url { get; set; }

        public AppMovie AppMovie { get; set; }

        public int AppMovieId { get; set; }
    }
}