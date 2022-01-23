using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PizzaOrderingSystem.Data;
using PizzaOrderingSystem.Services;
using PizzaOrderingSystem.ViewModels;
using System.Linq;

namespace PizzaOrderingSystem.Controllers
{
    public class AppController : Controller
    {
        private readonly IMailService _mailService;
        private PizzaContext _context;
        private readonly IPizzaRepository _repository;

        public AppController(IMailService mailService, PizzaContext context, IPizzaRepository repository)
        {
            _mailService = mailService;
            _context = context;
            _repository = repository;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                // Send the Email
                _mailService.SendMessage("shawn@wildermuth.com", model.Subject, $"From: {model.Name} - {model.Email}, Message: {model.Message}");
                ViewBag.UserMessage = "Mail Sent...";
                ModelState.Clear();
            }

            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        [Authorize]
        public IActionResult Shop()
        {
           
            var results = _repository.GetAllProducts();
            return View(results);

        }
    }
}
