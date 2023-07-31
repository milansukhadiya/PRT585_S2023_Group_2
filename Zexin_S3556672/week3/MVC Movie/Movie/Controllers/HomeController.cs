using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Movie.Models;
using System.Diagnostics;

namespace Movie.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private DataContext db;

        public HomeController(ILogger<HomeController> logger, DataContext _db)
        {
            _logger = logger;
            this.db = _db;
        }


        public IActionResult Index()
        {
            //var list = db.Movie.ToList();
            //Movie.Models.Movie movie = new Models.Movie()
            //{
            //    Language="en",
            //    Name="123",
            //    ReleaseDate=DateTime.Now,
            //    Director="abc",
            //    EmailAddress="132455"
            //};
            //db.Movie.Add(movie);
            //db.SaveChanges();
            return View();
        }

        /// <summary>
        /// List Page
        /// </summary>
        /// <returns></returns>
        public IActionResult List()
        {
            var list = db.MovieInfo.ToList();
            return View(list);
        }

        public IActionResult Create()
        {
            ViewBag.type = db.Category.ToList();
            return View();
        }
        [HttpPost]
        public IActionResult Create(MovieInfo movie)
        {
            db.MovieInfo.Add(movie);
            db.SaveChanges();

            return Redirect("/Home/List");
        }

        public IActionResult Edit(int Id)
        {
            ViewBag.type = db.Category.ToList();
            var model = db.MovieInfo.SingleOrDefault(p => p.Id == Id);
            return View(model);
        }
        [HttpPost]
        public IActionResult Edit(MovieInfo movie)
        {
            db.MovieInfo.Update(movie);
            db.SaveChanges();
            return Redirect("/Home/List");
        }

        /// <summary>
        /// Detail
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        public IActionResult Details(int Id)
        {
            var model = db.MovieInfo.SingleOrDefault(p => p.Id == Id);
            return View(model);
        }

        public IActionResult Delete(int Id)
        {
            var model = db.MovieInfo.SingleOrDefault(p => p.Id == Id);
            return View(model);
        }

        [HttpPost]
        public IActionResult Delete(MovieInfo movie)
        {
            var model = db.MovieInfo.SingleOrDefault(p => p.Id == movie.Id);
            if (model != null)
            {
                db.Remove(model);
                db.SaveChanges();
            }
            return Redirect("/Home/List");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}