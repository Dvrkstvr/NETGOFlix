using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class MoviesController : BaseApiController
    {
        private readonly DataContext _context;

        public MoviesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<AppMovie>>> GetMovies()
        {
            return await _context.Movies.ToListAsync();
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<AppMovie>> GetMovie(int id)
        {
            return await _context.Movies.FindAsync(id);
        }

        [HttpPost("addMovie")]
        public async Task<ActionResult<MovieDto>> AddMovie(MovieDto movieDto)
        {
            if(await MovieExists(movieDto.Title))
            {
                return BadRequest("Movie is already exists");
            }

            var movie = new AppMovie
            {
                Title = movieDto.Title.ToLower(),
                ReleaseYear = movieDto.ReleaseYear,
                MovieCategory = movieDto.MovieCategory
            };

            _context.Movies.Add(movie);
            await _context.SaveChangesAsync();

            return new MovieDto
            {
                Title = movieDto.Title.ToLower(),
                ReleaseYear = movieDto.ReleaseYear,
                MovieCategory = movieDto.MovieCategory
            };
        }

            [HttpDelete("removeMovie")]
            public async Task<ActionResult<MovieDto>> RemoveMovie(MovieDto movieDto)
        {
            if(!await MovieExists(movieDto.Title))
            {
                return BadRequest("Movie does not exists");
            }

            var movie = new AppMovie
            {
                Title = movieDto.Title.ToLower(),
                ReleaseYear = movieDto.ReleaseYear,
                MovieCategory = movieDto.MovieCategory
            };

            _context.Movies.Remove(movie);
            await _context.SaveChangesAsync();

            return new MovieDto
            {
                Title = movieDto.Title.ToLower(),
                ReleaseYear = movieDto.ReleaseYear,
                MovieCategory = movieDto.MovieCategory
            };
        }

        private async Task<bool> MovieExists(string title)
        {
            return await _context.Movies.AnyAsync(x => x.Title == title.ToLower());
        }
    }
}