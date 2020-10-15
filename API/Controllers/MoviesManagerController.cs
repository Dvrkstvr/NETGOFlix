using API.Data;

namespace API.Controllers
{
    public class MoviesManagerController : BaseApiController
    {
        private readonly DataContext _context;
        public MoviesManagerController(DataContext context)
        {
            _context = context;
        }
    }
}