using System.Collections.Generic;

namespace API.Entities
{
    public enum Category
    {
        Action,
        Comedy,
        Thriller,
        Documentary
    }
    public class AppMovie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int ReleaseYear { get; set; }
        public Category MovieCategory { get; set; }

        public ICollection<MovieImage> Image { get; set; }
    }
}