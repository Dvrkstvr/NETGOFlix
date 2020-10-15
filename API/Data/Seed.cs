using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedUsers(DataContext context)
        {
            if(await context.Users.AnyAsync())
            {
                return;
            } else {
                var userData = await System.IO.File.ReadAllTextAsync("Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<AppUser>>(userData);
                foreach (var user in users)
                {
                    using var hmac = new HMACSHA512();

                    user.UserName = user.UserName.ToLower();
                    user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("pass"));
                    user.PasswordSalt = hmac.Key;

                    context.Users.Add(user);
                }

                await context.SaveChangesAsync();
            }
        }

        public static async Task SeedMovies(DataContext context)
        {
            if(await context.Movies.AnyAsync())
            {
                return;
            } else {
                var movieData = await System.IO.File.ReadAllTextAsync("Data/MovieSeedData.json");
                var movies = JsonConvert.DeserializeObject<List<AppMovie>>(movieData);
                foreach (var movie in movies)
                {
                    movie.Title = movie.Title;
                    movie.ReleaseYear = movie.ReleaseYear;

                    context.Movies.Add(movie);
                }

                await context.SaveChangesAsync();
            }
        }
    }
}