using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using PizzaOrderingSystem.Data.Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace PizzaOrderingSystem.Data
{
    public class PizzaOrderSeeder
    {
        private readonly PizzaContext _context;
        private readonly IWebHostEnvironment _env;
        private readonly UserManager<StoreUser> _userManager;

        public PizzaOrderSeeder(PizzaContext context, IWebHostEnvironment env, UserManager<StoreUser> userManager) {

            _context = context;
            _env = env;
            _userManager = userManager;
        }

        public async Task SeedAsync() {
            //This just ensures if the database is created
            _context.Database.EnsureCreated();
            StoreUser user = await _userManager.FindByEmailAsync("alok@abspizza.com");
            if (user == null) {

                user = new StoreUser()
                {
                    FirstName = "Alok",
                    LastName = "Rana",
                    Email = "alok@abspizza.com",
                    UserName = "alok@abspizza.com"
                };
                var result = await _userManager.CreateAsync(user, "Alok123#");
                if (result != IdentityResult.Success) {
                    throw new InvalidOperationException("Could not create new user in seeder");
                }
            }


            if (!_context.Products.Any()) {
                //Create sample orders
                var filePath = Path.Combine(_env.ContentRootPath,"Data/pizza.json");
                var json = File.ReadAllText(filePath);
                var products = JsonSerializer.Deserialize<IEnumerable<Product>>(json);
                _context.Products.AddRange(products);

                var order = _context.Orders.Where(o => o.Id == 1).FirstOrDefault();
                if (order != null)
                {
                    order.User = user;
                    order.Items = new List<OrderItem>() {
                        new OrderItem() {
                            Product = products.First(),
                            Quantity = 5,
                            UnitPrice = products.First().Price
                        }
                    };
                }
               // _context.Orders.Add(order);
                _context.SaveChanges();
            }
        }
    }
}
