using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using PizzaOrderingSystem.Data.Entities;

namespace PizzaOrderingSystem.Data
{
    public class PizzaContext : IdentityDbContext<StoreUser>
    {
        private readonly IConfiguration _config;

        public PizzaContext(IConfiguration config) {
            _config = config;
        }

        //public PizzaContext() { 
        //}
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder); 
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer(_config["ConnectionStrings:PizzaContextDb"]);
        }
    }
}
